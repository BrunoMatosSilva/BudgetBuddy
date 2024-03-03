import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useRegisterController } from "./useRegisterController";

export function Register() {
  const {errors, register, handleSubmit, isLoading} = useRegisterController();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
    <div className=" w-full max-w-[500px] px-4">
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px]">Crie sua conta</h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Já possui uma conta?
          </span>
          <Link to="/login"
          className="tracking-[-0.5px] font-medium"
          >
            Fazer Login
          </Link>
        </p>
      </header>

      <form
      onSubmit={handleSubmit}
      className="mt-[60px] flex flex-col gap-4"
      >
        <Input
        placeholder="Nome"
        error={errors.name?.message}
        {...register('name')}
        />

        <Input
        type="email"
        placeholder="E-mail"
        error={errors.email?.message}
        {...register('email')}
        />

        <Input
        type="password"
        placeholder="Senha"
        error={errors.password?.message}
        {...register('password')}
        />

        <Button
        type="submit"
        className="mt-2"
        isLoading={isLoading}
        >
          Criar conta
        </Button>
      </form>
    </div>
    </div>
  )
}
