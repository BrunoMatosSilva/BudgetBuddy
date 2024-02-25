import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean
}

export function AuthGuard({isPrivate}: AuthGuardProps) {
  const signeIn = false;

  if(!signeIn && isPrivate) {
    return <Navigate to="/login" replace />
  }
  if (signeIn && !isPrivate) {
    return <Navigate to="/" />
  }

  return <Outlet />
}