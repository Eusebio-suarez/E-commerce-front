import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "./components/pages/Inicio";
import { Libros } from "./components/pages/Libros";
import { Recetas } from "./components/pages/Recetas";
import { Carrito } from "./components/pages/Carrito";
import { InicioSesion } from "./components/pages/InicioSesion";

import { Footer } from "./components/layouts/Footer";
import { useState } from "react";

import { Registrarse } from "./components/pages/Registrarse";
import { AdminLayout } from "./admin/components/layouts/AdminLayout";
import { Books } from "./admin/components/pages/Books";
import { Users} from "./admin/components/pages/Users"
import { Orders } from "./admin/components/pages/Orders"
import { PublicLayout } from "./components/layouts/PublicLayout";


export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <BrowserRouter>

    <Routes>
        <Route path="" element={<PublicLayout/>}>
          <Route path="" element={<Inicio/>}/>
          <Route path="/Libros" element={<Libros/>}/>
          <Route path="/Recetas" element={<Recetas/>}/>
          <Route path="/Carrito" element={<Carrito/>}/>
          <Route path="/InicioSesion" element={<InicioSesion/>}/>
          <Route path="/Registrarse" element={<Registrarse/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="books" element={<Books />} />
          <Route path="users" element={<Users/>}/>
          <Route path="orders" element={<Orders/>}/>
        </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}