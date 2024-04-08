import { AccountCard } from "./AccountCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { SliderNavigation } from "./SliderNavigation";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { UseAccountsController } from "./useAccountsController";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { cn } from "../../../../../lib/utils";
import { Spinner } from "../../../../components/Spinner";
import { PlusIcon } from "@radix-ui/react-icons";

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValueVisibility,
    isLoading,
    accounts,
    openNewAccountModal,
    currentBalance
  } = UseAccountsController();

  return(
    <div className="bg-secondary rounded-2xl h-full w-full px-4 py-8 md:p-10 text-secondary flex flex-col">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
        <Spinner className="h-10 w-10"/>
        </div>
      )}

      {!isLoading && (
        <>
        <div>
        <span className="tracking-tighter block text-primary">Saldo Total</span>

        <div className="flex items-center gap-2">
          <strong className={cn(
            "text-2xl tracking-[-1px] text-primary",
            !areValuesVisible && "blur-md"
          )}>
            {formatCurrency(currentBalance)}
          </strong>
          <button
          className="h-8 w-8 flex items-center justify-center bg-primary rounded-full"
          onClick={toggleValueVisibility}
          >
            <EyeIcon open={!areValuesVisible} />
          </button>
        </div>
        </div>

        <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">

          {accounts.length === 0 && (
            <>
            <div className="mb-4" slot="container-start">
              <strong className="tracking-[-1px] text-lg text-primary">
                Minhas contas
              </strong>
            </div>

            <button
            onClick={openNewAccountModal}
            className="mt-4 h-52 text-primary rounded-2xl border-2 border-dashed border-primary flex flex-col items-center justify-center gap-4"
            >
              <div className="w-11 h-11 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                <PlusIcon className="w-6 h-6" />
              </div>
              <span className="tracking-[-0.5ox] font-medium block w-32 text-center">
                Cadastre uma nova conta
              </span>
            </button>
            </>
          )}
          {accounts.length > 0 && (
            <div>
            <Swiper
            spaceBetween={16}
            slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
            onSlideChange={swipe => {
              setSliderState({
                isBeginning: swipe.isBeginning,
                isEnd: swipe.isEnd
              })
            }}
            >
          <div className="flex items-center justify-between mb-4" slot="container-start">
            <strong className="tracking-[-1px] text-lg text-primary">
              Minhas contas
            </strong>

            <SliderNavigation
            isBeginning={sliderState.isBeginning}
            isEnd={sliderState.isEnd}
            />
          </div>
              {accounts.map(account => (
                <SwiperSlide key={account.id}>
                  <AccountCard
                    data={account}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          </div>
          )}
        </div>
        </>
      )}
    </div>
  )
}
