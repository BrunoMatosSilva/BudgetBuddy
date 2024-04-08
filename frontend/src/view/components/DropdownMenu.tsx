import { ComponentProps } from "react";
import { cn } from "../../lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../lib/utils/ui/dropdown-menu";

function DropdownMenuRoot({ children }: {children: React.ReactNode}) {
return (
  <DropdownMenu>
    {children}
  </DropdownMenu>
)
}

function DropdownMenuActive({ children }: {children: React.ReactNode}) {
  return (
    <DropdownMenuTrigger className="outline-none" asChild>
        {children}
    </DropdownMenuTrigger>
  )
  }

  interface DropdownMenuWrapperProps {
    children: React.ReactNode;
    className?: string;
  }

  function DropdownMenuWrapper({ children, className }: DropdownMenuWrapperProps) {
    return (
      <DropdownMenuContent
      className={cn(
        "rounded-2xl p-2 space-y-2 flex flex-col",
        className
      )}>
        {children}
      </DropdownMenuContent>
    )
    }

    interface DropdownMenuSingleItemProps extends ComponentProps<'button'> {
      children: React.ReactNode;
      className?: string;
      onSelect?(): void;
    }

    function DropdownMenuSingleItem({ children, className, onSelect }: DropdownMenuSingleItemProps) {
      return (
        <DropdownMenuItem
        onSelect={onSelect}
        className={cn(
          "flex gap-2 cursor-pointer",
          className
        )}>
          {children}
        </DropdownMenuItem>
      )
      }

  export const DropdownMenuComponents = {
    Root: DropdownMenuRoot,
    Trigger: DropdownMenuActive,
    Content: DropdownMenuWrapper,
    Item: DropdownMenuSingleItem
  }
