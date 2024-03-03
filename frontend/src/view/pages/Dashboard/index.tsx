import { useAuth } from "../../../app/hooks/useAuth"
import { Button } from "../../../lib/utils/ui/button"

export function Dashboard() {
  const { signout } = useAuth()

  return (
    <div>
      <h1>Dashboard Page</h1>

      <Button onClick={signout}>
        Sair
      </Button>
    </div>
  )
}
