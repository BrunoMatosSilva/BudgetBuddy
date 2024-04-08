import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { DatePickerInput } from "../../../../components/DatePickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { InputSelect } from "../../../../components/InputSelect";
import { Modal } from "../../../../components/Modal";
import { useNewTransactionModalController } from "./useNewTransactionModalController";

export function NewTransactionModal() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
    register,
    errors,
    control,
    handleSubmit,
    accounts,
    categories,
    isLoading
  } = useNewTransactionModalController()

  const isExpense = newTransactionType === 'EXPENSE'

  return (
    <Modal
    title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
    open={isNewTransactionModalOpen}
    onClose={closeNewTransactionModal}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
        <span className="text-sm tracking-[-0.5px] text-primary/50">
          Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm tracking-[-0.5px] text-primary/50">R$</span>

            <Controller
            control={control}
            name="value"
            defaultValue="0"
            render={({ field: { onChange, value }}) => (
              <InputCurrency
                error={errors.value?.message}
                onChange={onChange}
                value={value}
                />
              )}
              />
            </div>

          <div className="mt-10 flex flex-col gap-2">
            <Input
            placeholder={ isExpense ? "Nome da Despesa" : "Nome da Receita"}
            type="text"
            {...register("name")}
            error={errors.name?.message}
            />

          <Controller
          control={control}
          name="categoryId"
          defaultValue=""
          render={({ field: { onChange, value}}) => (
            <InputSelect
            placeholder="Categoria"
            onChange={onChange}
            value={value}
            error={errors.categoryId?.message}
            options={categories.map(category => ({
              value: category.id,
              label: category.name
            }))}
            />
          )}
          />

          <Controller
          control={control}
          name="bankAccountId"
          defaultValue=""
          render={({ field: {onChange, value}}) => (
            <InputSelect
            onChange={onChange}
            value={value}
            error={errors.bankAccountId?.message}
            placeholder={isExpense ? 'Pagar com' : 'Receber na conta'}
            options={accounts.map(bankAccount => ({
              value: bankAccount.id,
              label: bankAccount.name
            }))}
            />
          )}
          />

            <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field: { onChange, value }}) => (
              <DatePickerInput
              onChange={onChange}
              value={value}
              />
            )}
            />
          </div>
        </div>

        <Button
        type="submit"
        className="w-full mt-6"
        isLoading={isLoading}
        >
          Criar
        </Button>
      </form>
    </Modal>
  )
}
