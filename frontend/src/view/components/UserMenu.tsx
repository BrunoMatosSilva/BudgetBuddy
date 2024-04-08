import { ExitIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "../../lib/utils/ui/avatar";
import { useAuth } from "../../app/hooks/useAuth";
import { DropdownMenuComponents } from "./DropdownMenu";

export function UserMenu() {
  const { signout, user } = useAuth()

  return (
    <DropdownMenuComponents.Root>
      <DropdownMenuComponents.Trigger>
          <Avatar className="cursor-pointer">
            <AvatarFallback>{user?.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
      </DropdownMenuComponents.Trigger>

      <DropdownMenuComponents.Content>
        <DropdownMenuComponents.Item onSelect={signout}>
          <ExitIcon /> Sair
        </DropdownMenuComponents.Item>
        <DropdownMenuComponents.Item>
          <PersonIcon /> Perfil
        </DropdownMenuComponents.Item>
        <DropdownMenuComponents.Item>
          <GearIcon/> Config
        </DropdownMenuComponents.Item>
      </DropdownMenuComponents.Content>
    </DropdownMenuComponents.Root>
  )
}
