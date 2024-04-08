import { Link, Outlet } from 'react-router-dom';
import { Logo } from "../components/Logo";
import { useTheme } from '../../app/contexts/ThemeProvider';
import { Button } from '../../lib/utils/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { DropdownMenuComponents } from '../components/DropdownMenu';

export function AuthLayout(){
    const { setTheme } = useTheme()

  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="w-full h-full flex justify-center items-center flex-col">
      <header className='w-full'>
        <div className='flex w-full justify-between pt-4 px-8'>
          <Link to="/">
            <Logo className="text-gray-500 h-6" />
          </Link>

          <div className='flex items-center gap-4'>
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
      <div className="w-full h-full flex justify-center items-center flex-col gap-16">
            <div className="w-full px-8">
              <Outlet />
            </div>
        </div>
      </div>
      </div>
  )
}
