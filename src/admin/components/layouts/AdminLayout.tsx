// src/admin/AdminLayout.tsx
import { Outlet } from "react-router-dom"
import { NavbarAdmin } from "./NavbarAdmin"

export const AdminLayout = () => {
  return (
    <>
      <NavbarAdmin />
      <main className="p-4">
        <Outlet /> 
      </main>
    </>
  )
}
