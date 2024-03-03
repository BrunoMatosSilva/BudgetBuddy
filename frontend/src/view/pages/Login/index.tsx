import { Link } from "react-router-dom";
import { useLoginController } from "./useLoginController";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
  const { handleSubmit, register, errors, isLoading } = useLoginController()

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className=" w-full max-w-[500px] px-4">
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px]">Entre em sua conta</h1>

        <p className="space-x-2">
          <span className="text-gray-600 tracking-[-0.5px]">
            Novo por aqui?
          </span>
          <Link to="/register"
          className="tracking-[-0.5px] font-medium"
          >
            Crie uma conta
          </Link>
        </p>
      </header>
      <form
      onSubmit={handleSubmit}
      className="mt-[60px] flex flex-col gap-4"
      >
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

        <Link
        to="/forget-password"
        >
          Esqueceu a sua senha?
        </Link>

        <Button
        type="submit"
        className="mt-2"
        isLoading={isLoading}
        >
          Entrar
        </Button>
      </form>
      </div>
    </div>
  )
}
