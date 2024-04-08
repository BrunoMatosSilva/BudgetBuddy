import { z } from "zod";
import { useDashboard } from "../../components/DashboardContext/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";
import { currencyStringToNumber } from "../../../../../app/utils/currencyStringToNumber";
import { toast } from "../../../../../lib/utils/ui/use-toast";

const schema = z.object({
  initialBalance: z.string().nonempty('Saldo inicial é obrigatório'),
  name: z.string().nonempty('Nome da Conta é obrigatória'),
  type: z.enum(["CHECKING" , "INVESTMENT" , "CASH"]),
  color: z.string().nonempty('Cor é obrigatório'),
})

type FormData = z.infer<typeof schema>

export function useNewAccountModalController() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal
  } = useDashboard()

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    control,
    reset
   } = useForm<FormData>({
    resolver: zodResolver(schema),
   });

   const queryClient = useQueryClient()
   const { isLoading, mutateAsync } = useMutation(bankAccountsService.create)

   const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
      })

      queryClient.invalidateQueries({ queryKey: ['bankAccounts']})
      toast({
        title: 'Conta foi cadastrada com sucesso!',
      })
      closeNewAccountModal();
      reset()

    } catch {
      toast({
        variant: 'destructive',
        title: 'Erro ao cadastrar a conta!',
      })
    }
   })

  return {
    isNewAccountModalOpen,
    closeNewAccountModal,
    register,
    errors,
    handleSubmit,
    control,
    isLoading
  }
}
