import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./authGuard";
import { Login } from "../view/pages/Login";
import { Register } from "../view/pages/Register";
import { Dashboard } from "../view/pages/Dashboard";
import { AuthLayout } from "../view/layouts";
import { ResetPassword } from "../view/pages/ResetPassword";
import { Home } from "../view/pages/Home";

export function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<AuthGuard isPrivate={false} />}>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/forget-password" element={<ResetPassword />} />
      </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<AuthGuard isPrivate />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
