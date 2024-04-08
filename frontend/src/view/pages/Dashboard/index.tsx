import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "../../../app/contexts/ThemeProvider"
import { Button } from "../../../lib/utils/ui/button"
import { Logo } from "../../components/Logo"
import { UserMenu } from "../../components/UserMenu"
import { Accounts } from "./components/Accounts"
import { DashboardContext, DashboardProvider } from "./components/DashboardContext"
import { Transactions } from "./components/Transactions"
import { DropdownMenuComponents } from "../../components/DropdownMenu"
import { Fab } from "./components/Fab"
import { NewAccountModal } from "./modals/NewAccountModal"
import { NewTransactionModal } from "./modals/NewTransactionModal"
import { EditAccountModal } from "./modals/EditAccountModal"

export function Dashboard() {
  const { setTheme } = useTheme()

  return (
    <DashboardProvider>
      <DashboardContext.Consumer>
      {({ accountBeingEdited }) => (
        <div className="w-full h-full bg-primary-foreground p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
        <header className="h-12 flex items-center justify-between">
          <Logo className="h-6" />

          <div className="flex items-center gap-4">
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

            <UserMenu />
          </div>
        </header>

        <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">
          <div className="w-full h-full md:w-1/2">
            <Accounts />
          </div>

          <div className="w-full h-full md:w-1/2">
            <Transactions />
          </div>
        </main>

        <Fab />
        <NewAccountModal />
        <NewTransactionModal />
        {accountBeingEdited && <EditAccountModal />}
      </div>
      )}
      </DashboardContext.Consumer>
    </DashboardProvider>
  )
}
