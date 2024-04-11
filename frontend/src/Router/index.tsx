import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./authGuard";
import { Login } from "../view/pages/Login";
import { Register } from "../view/pages/Register";
import { Dashboard } from "../view/pages/Dashboard";
import { ResetPassword } from "../view/pages/ResetPassword";
import { Home } from "../view/pages/Home";
import { ForgetPassword } from "../view/pages/ForgetPassword";
import { NotFound } from "../view/pages/NotFound";

export function Router() {
  return (
    <HashRouter>
    <Routes>
      <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<AuthGuard isPrivate />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
    </HashRouter>
  )
}
