import { Outlet } from 'react-router-dom';
import illustration from '../../assets/illustration.png'
import { Logo } from "../components/Logo";

export function AuthLayout(){
  return (
    <div className="flex w-full h-full">
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center flex-col gap-16">
          <Logo className="text-gray-500 h-6" />

          <div className="w-full max-w-[504px] px-8">
            <Outlet />
          </div>
        </div>

        <div className="w-1/2 h-full justify-center items-center p-8 relative hidden lg:flex">
          <img
          src={illustration}
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]"
          />

          <div className="max-w-[656px] bottom-8 bg-white p-10 absolute rounded-b-[32px]">
            <Logo className="text-violet-950 h-8" />
            <p className="text-gray-700 font-medium text-xl mt-6">
              Gerencie suas finanças pessoais de uma forma
              simples com o fincheck, e o melhor, totalmente de graça!
            </p>
          </div>
        </div>
    </div>
  )
}
