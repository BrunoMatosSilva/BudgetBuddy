import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<'button'>{
  isLoading?: boolean;
}

export function Button({ className, isLoading, disabled, children ,...props}: ButtonProps) {
 return (
  <button
  {...props}
  disabled={disabled || isLoading}
  className={cn("bg-violet-950 hover:bg-violet-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-medium px-6 h-12 rounded-2xl transition-all flex items-center justify-center", className)}
  >
    {!isLoading && children}
    {isLoading && <Spinner className="w-6 h-6" />}
  </button>
 )
}
