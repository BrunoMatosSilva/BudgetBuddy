import { Link } from "react-router-dom";
import heroImage from "../../../assets/heroImage.png"
import { Logo } from "../../components/Logo";
import { Button } from "../../../lib/utils/ui/button";
import { DropdownMenuComponents } from "../../components/DropdownMenu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "../../../app/contexts/ThemeProvider";

export function Home() {
  const { setTheme } = useTheme()

  return (
    <div className="w-full h-full">
      <header className='w-full'>
        <div className='flex w-full justify-between items-center md:pt-4 pt-2 px-2 md:px-8'>
          <Link to="/">
            <Logo className="text-gray-500 h-6" />
          </Link>

          <div className='flex items-center gap-1 md:gap-4'>
          <Link to="/login">
              <Button>
                Entrar
              </Button>
            </Link>

            <Link to="/register">
              <Button variant="outline">
                Cadastrar
              </Button>
            </Link>

            <DropdownMenuComponents.Root>
              <DropdownMenuComponents.Trigger>
                <Button variant="outline" size="icon">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuComponents.Trigger>
              <DropdownMenuComponents.Content>
                <DropdownMenuComponents.Item onSelect={() => setTheme("light")}>
                  Light
                </DropdownMenuComponents.Item>
                <DropdownMenuComponents.Item onSelect={() => setTheme("dark")}>
                  Dark
                </DropdownMenuComponents.Item>
              </DropdownMenuComponents.Content>
            </DropdownMenuComponents.Root>
          </div>
        </div>
      </header>
      <div className='flex flex-col w-full mt-12 items-center justify-center'>
        <h1 className="w-full max-w-3xl text-center md:text-7xl text-4xl px-2 font-semibold tracking-tight">
          Controle suas <span className="bg-gradient-to-r from-violet-600 via-orange-500 to-indigo-400 text-transparent bg-clip-text">Financias</span> em pouco tempo.
        </h1>

        <p className="mt-8 px-2 text-primary/60 max-w-3xl md:text-2xl text-xl text-center tracking-tighter">
          BudgetBuddy é uma ferramenta poderosa que vai te ajudar a gerenciar suas finanças de forma eficiente e descomplicada.
        </p>

        <div className="w-full max-w-xs mt-12">
          <Link to="/login" className="bg-primary text-xl hover:opacity-80 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-secondary font-medium px-6 h-12 rounded-lg transition-all flex items-center justify-center">
            Comece agora
          </Link>
        </div>

        <Link to="/login" className="mt-16 mb-16 px-2">
        <img
        src={heroImage}
        alt="BudgetBuddy"
        className="rounded-xl"
        />
      </Link>
      </div>
    </div>
  )
}
