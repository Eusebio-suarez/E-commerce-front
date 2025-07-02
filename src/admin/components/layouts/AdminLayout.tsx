// src/admin/AdminLayout.tsx
import { Outlet } from "react-router-dom"
import { HeaderAdmin } from "./HeaderAdmin"
import { NavbarAdmin } from "./NavbarAdmin"

export const AdminLayout = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#f4f5f7]">
        <HeaderAdmin />
        <main className="px-6 py-8 flex justify-between">
          <NavbarAdmin></NavbarAdmin> 
          <Outlet /> 
        </main>
      </div>
    </>
  )
}
