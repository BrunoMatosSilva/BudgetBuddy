import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { InputSelect } from "../../../../components/InputSelect";
import { Modal } from "../../../../components/Modal";
import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal,
    errors,
    handleSubmit,
    register,
    control,
    isLoading
  } = useNewAccountModalController()

  return (
    <Modal
    title="Nova Conta"
    open={isNewAccountModalOpen}
    onClose={closeNewAccountModal}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <span className="text-sm tracking-[-0.5px] text-primary/50">Saldo inicial</span>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm tracking-[-0.5px] text-primary/50">R$</span>

            <Controller
            control={control}
            name="initialBalance"
            defaultValue="0"
            render={({ field: { onChange, value }}) => (
              <InputCurrency
              error={errors.initialBalance?.message}
              onChange={onChange}
              value={value}
              />
            )}
            />
          </div>

          <div className="mt-10 flex flex-col gap-2">
            <Input
            placeholder="Nome da Conta"
            type="text"
            {...register('name')}
            error={errors.name?.message}
            />

            <Controller
            control={control}
            name="type"
            defaultValue="CHECKING"
            render={({ field: { onChange, value} }) => (
              <InputSelect
                name="type"
                placeholder="Tipo"
                error={errors.type?.message}
                onChange={onChange}
                value={value}
                options={[
                  {
                    label: "Conta Corrente",
                    value: "CHECKING"
                  },
                  {
                    label: "Investimentos",
                    value: "INVESTMENT"
                  },
                  {
                    label: "Dinheiro Físico",
                    value: "CASH"
                  },
              ]}
            />
            )}
            />

            <Controller
            control={control}
            name="color"
            defaultValue=""
            render={({ field: { onChange, value }}) => (
              <ColorsDropdownInput
                error={errors.color?.message}
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
