import { z } from "zod";
import { useDashboard } from "../../components/DashboardContext/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBankAccounts } from "../../../../../app/hooks/useBankAccounts";
import { useCategories } from "../../../../../app/hooks/useCategories";
import { useMemo } from "react";
import { transactionsService } from "../../../../../app/services/transactionsService";
import { toast } from "../../../../../lib/utils/ui/use-toast";
import { currencyStringToNumber } from "../../../../../app/utils/currencyStringToNumber";

const schema = z.object({
  value: z.union([
    z.string().nonempty('Informe o valor'),
    z.number(),
  ]),
  name: z.string().nonempty('Informe o nome'),
  categoryId: z.string().nonempty('Informe a categoria'),
  bankAccountId: z.string().nonempty('Informe o tipo de conta'),
  date: z.date(),
})

type FormData = z.infer<typeof schema>

export function useNewTransactionModalController(){
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useDashboard()

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const queryClient = useQueryClient();
  const { isLoading, mutateAsync } = useMutation(transactionsService.create)
  const { accounts } = useBankAccounts()
  const { categories: categoriesList } = useCategories()

  const categories = useMemo(() => {
    return categoriesList.filter(category => category.type  === newTransactionType)
  }, [categoriesList, newTransactionType])

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        value: currencyStringToNumber(data.value),
        type: newTransactionType!,
        date: data.date.toISOString()
      })

      queryClient.invalidateQueries({ queryKey: ['transactions']})
      queryClient.invalidateQueries({ queryKey: ['bankAccounts']})
      toast(
         {title: 'Cadastrado com sucesso!'},
      )
      closeNewTransactionModal();
      reset()

    } catch {
      toast({
        variant: 'destructive',
        title: 'Erro ao cadastrar!',
      })
    }
  })

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
    register,
    errors,
    control,
    handleSubmit,
    accounts,
    categories,
    isLoading
  }
}
