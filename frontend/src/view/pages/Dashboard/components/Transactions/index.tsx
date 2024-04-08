import { Swiper, SwiperSlide } from "swiper/react";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { MONTHS } from "../../../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { useTransactionsController } from "./useTransactionsController";
import { cn } from "../../../../../lib/utils";
import { Spinner } from "../../../../components/Spinner";
import EmptyStateImage from "../../../../../assets/empty-state.svg"
import { TransactionDropdown } from "./TransactionDropdown";
import { FiltersModal } from "./FiltersModal";
import { formatDate } from "../../../../../app/utils/formatDate";
import { EditTransactionModal } from "../../modals/EditTransactionModal";

export function Transactions() {
  const {
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions,
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    handleChangeFilters,
    handleApplyFilters,
    filters,
    handleCloseEditModal,
    handleOpenEditModal,
    isEditModalOpen,
    transactionBeingEdited
  } = useTransactionsController()
  const hasTransaction = transactions.length > 0

  return(
    <div className="bg-accent-foreground rounded-2xl w-full h-full md:max-h-[650px] px-4 py-8 md:p-10 flex flex-col">

      {isInitialLoading && (
        <div className="w-full h-full flex items-center justify-center">
        <Spinner className="text-primary-foreground fill-primary/50 h-10 w-10"/>
        </div>
      )}

      {!isInitialLoading && (
        <>
        <FiltersModal
        open={isFiltersModalOpen}
        onClose={handleCloseFiltersModal}
        onApplyFilters={handleApplyFilters}
        />

        <header className="text-primary-foreground">
        <div className="flex justify-between items-center">
          <TransactionDropdown
          onSelect={handleChangeFilters('type')}
          selectedType={filters.type}
          />
          <button
          onClick={handleOpenFiltersModal}
          >
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6 relative">
          <Swiper
          slidesPerView={3}
          centeredSlides
          initialSlide={filters.month}
          onSlideChange={swiper => {
            handleChangeFilters('month')(swiper.realIndex);
          }}
          >
            <SliderNavigation />
              {MONTHS.map((month, index) => (
                <SwiperSlide key={month}>
                  {({isActive}) => (
                   <SliderOption
                   month={month}
                   isActive={isActive}
                   index={index}
                   />
                  )}
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4 text-primary-foreground flex-1 space-y-2 overflow-y-auto">
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <Spinner className="h-10 w-10" />
        </div>
      )}

      {(!hasTransaction && !isLoading) && (
        <div className="flex flex-col items-center justify-center h-full gap-4">
            <img src={EmptyStateImage} alt="Empty state" className="h-32 w-32" />
            <p>Não encontramos nenhuma transação</p>
        </div>
      )}
       {(hasTransaction && !isLoading) && (
          <>
         {transactionBeingEdited && (
           <EditTransactionModal
           open={isEditModalOpen}
           onClose={handleCloseEditModal}
           transaction={transactionBeingEdited}
           />
         )}

          {transactions.map(transaction => (
            <div
            key={transaction.id}
            className="bg-accent p-4 rounded-2xl text-primary flex items-center justify-between gap-4"
            role="button"
            onClick={() => handleOpenEditModal(transaction)}
            >
              <div className="flex-1 flex items-center gap-3 ">
                <CategoryIcon
                type={transaction.type === 'EXPENSE' ? 'expense' : 'income'}
                category={transaction.category?.icon}
                />

                <div>
                  <strong className="font-bold tracking-[-0.5px] block">
                    {transaction.name}
                  </strong>
                  <span className="text-sm">
                    {formatDate(new Date(transaction.date))}
                  </span>
                </div>
              </div>

             <span className={cn(
              "tracking-[-0.5px]",
              transaction.type === 'EXPENSE' ? "text-red-600" : "text-green-600",
              !areValuesVisible && "blur-sm"
             )}>
              {transaction.type === 'EXPENSE' ? "-" : "+"} {formatCurrency(transaction.value)}</span>
            </div>
          ))}
          </>
        )}
      </div>
        </>
      )}
    </div>
  )
}
