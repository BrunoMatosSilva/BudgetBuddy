import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { DropdownMenuComponents } from "../../../../components/DropdownMenu";
import { IncomeIcon } from "../../../../components/icons/IncomeIcon";
import { ExpensesIcon } from "../../../../components/icons/ExpensesIcon";

interface TransactionTypeDropdownProps {
  onSelect(type: 'INCOME' | "EXPENSE" | undefined): void;
  selectedType: 'INCOME' | "EXPENSE" | undefined
}

export function TransactionDropdown({ onSelect, selectedType }: TransactionTypeDropdownProps) {
  return(
    <DropdownMenuComponents.Root>
      <DropdownMenuComponents.Trigger>
        <button className="flex items-center gap-2">

          {selectedType === "EXPENSE" && <ExpensesIcon />}
          {selectedType === "INCOME" && <IncomeIcon />}
          {selectedType === undefined && <TransactionsIcon />}

          <span className="text-sm tracking-[-0.5px] font-medium">
            {selectedType === "EXPENSE" && "Despesas"}
            {selectedType === "INCOME" && "Receitas"}
            {selectedType === undefined && "Transações"}
          </span>
          <ChevronDownIcon />
        </button>
      </DropdownMenuComponents.Trigger>
      <DropdownMenuComponents.Content>
        <DropdownMenuComponents.Item onSelect={() => onSelect('INCOME')}>
          <IncomeIcon />
          Receitas
        </DropdownMenuComponents.Item>
        <DropdownMenuComponents.Item onSelect={() => onSelect('EXPENSE')}>
          <ExpensesIcon />
          Despesas
        </DropdownMenuComponents.Item>
        <DropdownMenuComponents.Item onSelect={() => onSelect(undefined)}>
          <TransactionsIcon />
          Transações
        </DropdownMenuComponents.Item>
      </DropdownMenuComponents.Content>
    </DropdownMenuComponents.Root>
  )
}
