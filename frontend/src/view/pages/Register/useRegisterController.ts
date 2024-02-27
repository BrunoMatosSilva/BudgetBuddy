import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { authService } from '../../../app/services/authService'
import { useMutation } from '@tanstack/react-query'
import { SignupParams } from '../../../app/services/authService/signup'
import toast from 'react-hot-toast'

const schema = z.object({
  name: z.string().nonempty('O nome é obrigatorio'),
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(8, 'Senha deve conter pelo menos 8 digitos'),
})

type FormData = z.infer<typeof schema>

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
   } = useForm<FormData>({
    resolver: zodResolver(schema)
   })

   const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
   });

   const handleSubmit = hookFormHandleSubmit(async (data) => {
    try{
    const { accessToken } = await mutateAsync(data)
    console.log(accessToken)
    toast.success('Usuario criado com sucesso!')

    } catch {
      toast.error('Ocorreu um erro ao criar sua conta!')
    }
   })

   return {handleSubmit, register, errors, isLoading}
}
