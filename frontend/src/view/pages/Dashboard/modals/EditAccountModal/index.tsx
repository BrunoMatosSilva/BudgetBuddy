import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { InputSelect } from "../../../../components/InputSelect";
import { Modal } from "../../../../components/Modal";
import { useEditAccountModalController } from "./useEditAccountModalController";
import { TrashIcon } from "../../../../components/icons/TrashIcon";
import { ConfirmDeleteModal } from "../../../../components/ConfirmDeleteModal";

export function EditAccountModal() {
  const {
    isEditAccountModalOpen,
    closeEditAccountModal,
    errors,
    handleSubmit,
    register,
    control,
    isLoading,
    isLoadingDelete,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteAccount
  } = useEditAccountModalController()

  if (isDeleteModalOpen) {
    return <ConfirmDeleteModal
    title="Tem certeza que deseja excluir está conta?"
    description="Ao excluir a conta, também serão excluidos todos os registros de receita e despesas relacionados."
    onClose={handleCloseDeleteModal}
    onConfirme={handleDeleteAccount}
    isLoading={isLoadingDelete}
    />
  }

  return (
    <Modal
    title="Editar Conta"
    open={isEditAccountModalOpen}
    onClose={closeEditAccountModal}
    rightAction={(
      <button onClick={handleOpenDeleteModal}>
        <TrashIcon className="text-red-600 h-6 w-6"/>
      </button>
    )}
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
          Salvar
        </Button>
      </form>
    </Modal>
  )
}
