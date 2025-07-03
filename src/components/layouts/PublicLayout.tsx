// src/components/layouts/PublicLayout.tsx
import { Outlet } from "react-router-dom"
import { Encabezado } from "./Encabezado"
import { Footer } from "./Footer"

export const PublicLayout = () => {
  return (
    <>
      <Encabezado />
      <Outlet />
      <Footer />
    </>
  )
}
