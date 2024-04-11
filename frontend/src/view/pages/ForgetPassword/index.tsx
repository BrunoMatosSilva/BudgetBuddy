import { Link } from "react-router-dom"
import { useForgetPasswordController } from "./useForgetPasswordController"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function ForgetPassword() {
  const { errors, handleSubmit, register, isLoading } = useForgetPasswordController()

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
    <div className=" w-full max-w-[500px] px-4">
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px]">Esqueci minha senha</h1>

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
          type="email"
          placeholder="Email"
          error={errors.email?.message}
          {...register('email')}
        />
        <Button
          type="submit"
          isLoading={isLoading}
        >
          Enviar
        </Button>
      </form>
    </div>
  </div>
  )
}
