import { ComponentProps } from "react";
import { Spinner } from "./Spinner";
import { cn } from "../../lib/utils";

interface ButtonProps extends ComponentProps<'button'>{
  isLoading?: boolean;
}

export function Button({ className, isLoading, disabled, children ,...props}: ButtonProps) {
 return (
  <button
  {...props}
  disabled={disabled || isLoading}
  className={cn("bg-primary hover:opacity-80 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-secondary font-medium px-6 h-12 rounded-lg transition-all flex items-center justify-center", className)}
  >
    {!isLoading && children}
    {isLoading && <Spinner className="w-6 h-6" />}
  </button>
 )
}
