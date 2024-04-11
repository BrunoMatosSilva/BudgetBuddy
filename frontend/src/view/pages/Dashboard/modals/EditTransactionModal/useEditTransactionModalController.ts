import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBankAccounts } from "../../../../../app/hooks/useBankAccounts";
import { useCategories } from "../../../../../app/hooks/useCategories";
import { useMemo, useState } from "react";
import { Transaction } from "../../../../../app/entities/Transaction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionsService } from "../../../../../app/services/transactionsService";
import { currencyStringToNumber } from "../../../../../app/utils/currencyStringToNumber";
import { toast } from "../../../../../lib/utils/ui/use-toast";

const schema = z.object({
  value: z.union([
    z.string().nonempty('Saldo inicial é obrigatório'),
    z.number(),
  ]),
  name: z.string().nonempty('Informe o nome'),
  categoryId: z.string().nonempty('Informe a categoria'),
  bankAccountId: z.string().nonempty('Informe o tipo de conta'),
  date: z.date(),
})

type FormData = z.infer<typeof schema>

export function useEditTransactionModalController(
  transaction: Transaction | null,
  onClose:() => void
){

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      bankAccountId: transaction?.bankAccountId,
      categoryId: transaction?.category?.id,
      name: transaction?.name,
      value: transaction?.value,
      date: transaction ? new Date(transaction.date) : new Date(),
    }
  });

  const { accounts } = useBankAccounts()
  const { categories: categoriesList } = useCategories()
  const queryClient = useQueryClient()
  const { isLoading , mutateAsync} = useMutation(transactionsService.updateTransaction)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { isLoading: isLoadingDelete, mutateAsync: removeTransaction } = useMutation(transactionsService.remove)

  const categories = useMemo(() => {
    return categoriesList.filter(category => category.type  === transaction?.type)
  }, [categoriesList, transaction])

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        id: transaction!.id,
        value: currencyStringToNumber(data.value),
        type: transaction!.type,
        date: data.date.toISOString()
      })

      queryClient.invalidateQueries({ queryKey: ['transactions']})
      queryClient.invalidateQueries({ queryKey: ['bankAccounts']})
      toast(
         {title: 'Editado com sucesso!'},
      )
      onClose()
    } catch {
      toast({
        variant: 'destructive',
        title: 'Erro ao editar!',
      })
    }
  })

  async function handleDeleteTransaction() {
    try {
      await removeTransaction(transaction!.id)

      queryClient.invalidateQueries({ queryKey: ['transactions']})
      queryClient.invalidateQueries({ queryKey: ['bankAccounts']})
      toast({
        title: 'A transação foi deletada com sucesso!',
      })
      onClose();

    } catch {
      toast({
        variant: 'destructive',
        title: 'Erro ao deletar a transação!',
      })
    }
  }

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true)
   }

   function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false)
   }

  return {
    register,
    errors,
    control,
    handleSubmit,
    accounts,
    categories,
    isLoading,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteTransaction,
    isLoadingDelete,
  }
}
