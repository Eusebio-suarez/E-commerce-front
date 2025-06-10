import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Encabezado } from "./components/layouts/Encabezado";
import { Inicio } from "./components/pages/Inicio";
import { Libros } from "./components/pages/Libros";
import { Recetas } from "./components/pages/Recetas";
import { Carrito } from "./components/layouts/Carrito";

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Encabezado></Encabezado>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/Libros" element={<Libros/>}/>
      <Route path="/Recetas" element={<Recetas/>}/>
    </Routes>
    <Carrito></Carrito>
    </BrowserRouter>
    </>
  )
}