import { useState } from "react";
import { cn } from "../../lib/utils";
import { DropdownMenuComponents } from "./DropdownMenu";
import { CaretSortIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { ColorIcon } from "./icons/ColorIcon";

interface ColorsDropdownInputProps{
  className?: string;
  error?: string;
  value?: string;
  onChange?(value: string): void;
}

type Color = {
  color: string;
  bg: string;
};

const colors: Color[] = [
  { color: '#868E96', bg: '#F8F9FA' },
  { color: '#FA5252', bg: '#FFF5F5' },
  { color: '#E64980', bg: '#FFF0F6' },
  { color: '#BE4BDB', bg: '#F8F0FC' },
  { color: '#7950F2', bg: '#F3F0FF' },
  { color: '#4C6EF5', bg: '#EDF2FF' },
  { color: '#228BE6', bg: '#E7F5FF' },
  { color: '#15AABF', bg: '#E3FAFC' },
  { color: '#12B886', bg: '#E6FCF5' },
  { color: '#40C057', bg: '#EBFBEE' },
  { color: '#82C91E', bg: '#F4FCE3' },
  { color: '#FAB005', bg: '#FFF9DB' },
  { color: '#FD7E14', bg: '#FFF4E6' },
  { color: '#212529', bg: '#F8F9FA' },
];

export function ColorsDropdownInput({error, className, value, onChange}: ColorsDropdownInputProps) {
  const [selectedColor, setSelectedColor] = useState<null | Color>(() => {
    if (!value) {
      return null
    }

    return colors.find(c => c.color === value) ?? null;
  })

  function handleSelect(color: Color){
    setSelectedColor(color)
    onChange?.(color.color)
  }

return (
  <div>
  <DropdownMenuComponents.Root>
    <DropdownMenuComponents.Trigger >
      <button className={cn('text-base text-left px-3 flex items-center justify-between bg-white w-full rounded-lg border border-gray-500 h-[52px] text-gray-800 focus:border-gray-800 transition-all outline-none', error && '!border-red-900', className)}>
        <span>Cor</span>

        {!selectedColor && (
          <CaretSortIcon className="h-4 w-4 opacity-50" />
        )}

        {selectedColor && (
          <ColorIcon color={selectedColor.color} bg={selectedColor.bg} />
        )}
      </button>
    </DropdownMenuComponents.Trigger>

    <DropdownMenuComponents.Content className="grid grid-cols-4">
      {colors.map(color => (
        <DropdownMenuComponents.Item
        key={color.color}
        onSelect={() => handleSelect(color)}
        >
        <ColorIcon
        color={color.color}
        bg={color.bg}
        />
      </DropdownMenuComponents.Item>
      ))}
    </DropdownMenuComponents.Content>
  </DropdownMenuComponents.Root>

  {error &&  (
  <div className="flex gap-2 items-center mt-2 text-red-600">
    <CrossCircledIcon />
    <span className="text-xs flex gap-2">{error}</span>
  </div>
  )}
  </div>
)}
