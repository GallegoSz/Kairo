import { Routes, Route } from "react-router-dom"

import Layout from "./layouts/Layout"
import AuthLayout from "./layouts/AuthLayout"

import CalendarPage from "./pages/CalendarPage"
import AssignPage from "./pages/AssignPage"
import LoginPage from "./pages/LoginPage"
import AccountPage from "./pages/AccountPage"
import CompanyPage from "./pages/CompanyPage"
import NotificationsPage from "./pages/NotificationsPage"
import FormLayout from "./layouts/FormLayout"
import AccountFormPage from "./pages/AccountFormPage"

export default function App() {
  return (
    <Routes>

      <Route element={<Layout />}>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/atribuir" element={<AssignPage />} />
        <Route path="/conta" element={<AccountPage />}/>
        <Route path="/empresa" element={<CompanyPage />}/>
        <Route path="/notificacoes" element={<NotificationsPage />}/>
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<FormLayout />}>
        <Route path="/conta/editar" element={<AccountFormPage />} />
      </Route>

    </Routes>
  )
}





