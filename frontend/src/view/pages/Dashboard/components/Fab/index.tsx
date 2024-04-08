import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenuComponents } from "../../../../components/DropdownMenu";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { BankAccountIcon } from "../../../../components/icons/BankAccountIcon";
import { useDashboard } from "../DashboardContext/useDashboard";

export function Fab() {
  const { openNewAccountModal, openNewTransactionModal } = useDashboard()
  return(
    <div className="fixed right-4 bottom-4">
      <DropdownMenuComponents.Root>
      <DropdownMenuComponents.Trigger>
        <button
        className="w-12 h-12 bg-secondary border-2 border-secondary-foreground rounded-full flex items-center justify-center"
        >
          <PlusIcon className="w-6 h-6" />
        </button>
      </DropdownMenuComponents.Trigger>

      <DropdownMenuComponents.Content>
        <DropdownMenuComponents.Item
        onSelect={() => openNewTransactionModal('EXPENSE')}
        >
          <CategoryIcon type="expense" />
          Nova Despesa
        </DropdownMenuComponents.Item>
        <DropdownMenuComponents.Item
        onSelect={() => openNewTransactionModal('INCOME')}
        >
          <CategoryIcon type="income" />
          Nova Receita
        </DropdownMenuComponents.Item>
        <DropdownMenuComponents.Item
        onSelect={openNewAccountModal}
        >
          <BankAccountIcon />
          Nova Conta
        </DropdownMenuComponents.Item>
      </DropdownMenuComponents.Content>

    </DropdownMenuComponents.Root>
    </div>
  )
}
