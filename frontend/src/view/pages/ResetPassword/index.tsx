import { useEffect } from "react"
import { useResetPasswordController } from "./useResetPasswordController"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function ResetPassword() {
  const { search } = useLocation()
  const navigate = useNavigate()

  const token = new URLSearchParams(search).get('t')

  useEffect(() => {
    if (!token) navigate('/login')
  }, [])

  const { errors, handleSubmit, register, isLoading } = useResetPasswordController(token as string)

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
    <div className=" w-full max-w-[500px] px-4">
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px]">Insira sua nova senha</h1>

        <p className="space-x-2">
          <span className="text-gray-600 tracking-[-0.5px]">Lembrou sua senha?</span>
          <Link to="/login" className="tracking-[-1px] font-medium">Fazer Login</Link>
        </p>
      </header>

      <form
        className="mt-[60px] flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          type="password"
          placeholder="Nova senha"
          error={errors.newPassword?.message}
          {...register('newPassword')}
        />
        <Input
          type="password"
          placeholder="Confirme sua nova senha"
          error={errors.confirmationNewPassword?.message}
          {...register('confirmationNewPassword')}
        />
        <Button
          type="submit"
          isLoading={isLoading}
        >
          Alterar senha
        </Button>
      </form>
    </div>
  </div>
  )
}
