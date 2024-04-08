import { z } from "zod";
import { useDashboard } from "../../components/DashboardContext/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";
import { currencyStringToNumber } from "../../../../../app/utils/currencyStringToNumber";
import { toast } from "../../../../../lib/utils/ui/use-toast";
import { useState } from "react";

const schema = z.object({
  initialBalance: z.union([
    z.string().nonempty('Saldo inicial é obrigatório'),
    z.number(),
  ]),
  name: z.string().nonempty('Nome da Conta é obrigatória'),
  type: z.enum(["CHECKING" , "INVESTMENT" , "CASH"]),
  color: z.string().nonempty('Cor é obrigatório'),
})

type FormData = z.infer<typeof schema>

export function useEditAccountModalController() {
  const {
    isEditAccountModalOpen,
    closeEditAccountModal,
    accountBeingEdited
  } = useDashboard()

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    control,
   } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      color: accountBeingEdited?.color,
      name: accountBeingEdited?.name,
      type: accountBeingEdited?.type,
      initialBalance: accountBeingEdited?.initialBalance,
    }
   });

   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const queryClient = useQueryClient()
   const { isLoading, mutateAsync: updateAccount } = useMutation(bankAccountsService.update)
   const { isLoading: isLoadingDelete, mutateAsync: removeAccount } = useMutation(bankAccountsService.remove)

   const handleSubmit = hookFormHandleSubmit(async (data) => {

    try {
      await updateAccount({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
        id: accountBeingEdited!.id
      })

      queryClient.invalidateQueries({ queryKey: ['bankAccounts']})
      toast({
        title: 'A Conta foi editada com sucesso!',
      })
      closeEditAccountModal();

    } catch {
      toast({
        variant: 'destructive',
        title: 'Erro ao salvar alterações!',
      })
    }
   });

   function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true)
   }

   function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false)
   }

   async function handleDeleteAccount() {
    try {
      await removeAccount(accountBeingEdited!.id)

      queryClient.invalidateQueries({ queryKey: ['bankAccounts']})
      toast({
        title: 'A Conta foi deletada com sucesso!',
      })
      closeEditAccountModal();

    } catch {
      toast({
        variant: 'destructive',
        title: 'Erro ao deletar a conta!',
      })
    }
  }

  return {
    isEditAccountModalOpen,
    closeEditAccountModal,
    register,
    errors,
    handleSubmit,
    control,
    isLoading,
    isLoadingDelete,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteAccount
  }
}
