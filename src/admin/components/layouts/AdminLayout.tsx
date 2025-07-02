// src/admin/AdminLayout.tsx
import { Outlet } from "react-router-dom"
import { HeaderAdmin } from "./HeaderAdmin"

export const AdminLayout = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#f4f5f7]">
        <HeaderAdmin />
        <main className="p-4">
          <Outlet /> 
        </main>
      </div>
    </>
  )
}
