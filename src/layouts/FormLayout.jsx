import { Outlet } from "react-router-dom"

export default function FormLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-orange-900">
      <Outlet />
    </div>
  )
}
