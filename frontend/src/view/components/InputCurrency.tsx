import { CrossCircledIcon } from "@radix-ui/react-icons"
import { NumericFormat } from "react-number-format"
import { cn } from "../../lib/utils"

interface InputCurrencyProps {
  error?: string;
  value?: string | number;
  onChange?(value: string): void;
}

export function InputCurrency({ error, onChange, value }: InputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        className={cn(
          "w-full text-primary font-bold text-[32px] tracking-[-1px] bg-transparent outline-none",
          error && "text-red-600"
        )}
        thousandSeparator="."
        decimalSeparator=","
        value={value}
        onChange={event => onChange?.(event.target.value)}
        />

      {error &&  (
        <div className="flex gap-2 items-center mt-2 text-red-600">
          <CrossCircledIcon />
          <span className="text-xs flex gap-2">{error}</span>
        </div>
      )}
    </div>
  )
}
