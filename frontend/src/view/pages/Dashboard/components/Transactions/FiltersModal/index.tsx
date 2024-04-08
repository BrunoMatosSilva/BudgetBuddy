import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "../../../../../components/Button";
import { Modal } from "../../../../../components/Modal";
import { cn } from "../../../../../../lib/utils";
import { useFiltersModalController } from "./useFiltersModalController";

interface FiltersModalProps {
  open: boolean;
  onClose(): void;
  onApplyFilters(filters: { bankAccountId: string | undefined , year: number }): void;
}

export function FiltersModal({ open, onClose, onApplyFilters }: FiltersModalProps) {
  const {
    selectedBankAccountId,
    handleSelectBankAccount,
    selectedYear,
    handleChangeYear,
    accounts
  } = useFiltersModalController()
  return (
    <Modal
    open={open}
    onClose={onClose}
    title="Filtros"
    >
      <div>
        <span className="text-lg tracking-[-1px] font-bold">
          Conta
        </span>

        <div className="space-y-2 mt-2 text-primary/60">
          {accounts.map(account => (
            <button
            key={account.id}
            onClick={() => handleSelectBankAccount(account.id)}
            className={cn(
              "p-2 rounded-2xl w-full text-left hover:bg-primary-foreground/50 transition-colors",
              account.id === selectedBankAccountId && "bg-primary-foreground"
            )}>
            {account.name}
          </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <span className="text-lg tracking-[-1px] font-bold">
          Ano
        </span>

        <div className="mt-2 w-full flex items-center justify-between">
          <button
          className="w-12 h-12 flex items-center justify-center"
          onClick={() => handleChangeYear(-1)}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <div className="flex-1 text-center">
            <span className="font-medium text-sm tracking-[-0.5px]">
              {selectedYear}
            </span>
          </div>

          <button
          className="w-12 h-12 flex items-center justify-center"
          onClick={() => handleChangeYear(1)}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <Button
      className="w-full mt-10"
      onClick={() => onApplyFilters({
        bankAccountId: selectedBankAccountId,
        year: selectedYear
      })}
      >
        Aplicar Filtros
      </Button>
    </Modal>
  )
}
