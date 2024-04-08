import { useSwiper } from "swiper/react";
import { cn } from "../../../../../lib/utils";

interface SliderOptionProps {
  month: string;
  isActive: boolean;
  index: number;
}

export function SliderOption({ month, isActive, index }:SliderOptionProps) {
  const swiper = useSwiper()

  return (
    <button
    onClick={() => swiper.slideTo(index)}
    className={cn(
      "w-full rounded-full h-12 text-sm tracking-[-0.5px]",
      isActive && "bg-primary-foreground text-primary"
    )}
    >
      {month}
    </button>
  )
}
