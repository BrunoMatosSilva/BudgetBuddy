import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { SigninParams } from "../../../app/services/authService/signin";
import { authService } from "../../../app/services/authService";

const schema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(8, 'Senha deve conter pelo menos 8 digitos'),
})

type FormData = z.infer<typeof schema>

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
   } = useForm<FormData>({
    resolver: zodResolver(schema)
   })

   const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
   });

   const handleSubmit = hookFormHandleSubmit(async (data) => {
    try{
    await mutateAsync(data)
    toast.success('Login feito com sucesso!')

    } catch {
      toast.error('Credenciais inválidas!')
    }
   })

   return {handleSubmit, register, errors, isLoading}
}
