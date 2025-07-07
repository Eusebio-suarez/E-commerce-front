import { useState} from "react"
import { NavLink } from "react-router-dom"


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (

        <div className="flex justify-end py-5 sm:pr-10 lg:pr-28 lg:py-9">
            <div className="font-[450] text-[18px]">
            <ul className="hidden md:flex  md:items-center sm:gap-6 lg:gap-9">
                <li className="hover:scale-116 transition duration-200">
                    <NavLink to="/" className={({ isActive }) =>`gap-2 transition duration-200 ${isActive ? "border-b-4 py-1 border-[#df5454] font-semibold" : "text-[#000000]"}`}>
                    Inicio
                </NavLink></li>

                <li className="hover:scale-116 transition duration-200">
                    <NavLink to="/Libros" className={({ isActive }) =>`gap-2 transition duration-200 ${isActive ? "border-b-4 py-1 border-[#df5454] font-semibold" : "text-[#000000]"}`}>
                    Libros
                </NavLink></li>

                <li className="hover:scale-116 transition duration-200">
                    <NavLink to="/Recetas" className={({ isActive }) =>`gap-2 transition duration-200 ${isActive ? "border-b-4 py-1 border-[#df5454] font-semibold" : "text-[#000000]"}`}>               
                    Recetas
                </NavLink></li>

                <li className="hover:scale-116 transition duration-200">
                    <NavLink to="/Carrito" className={({ isActive }) =>` gap-2 transition duration-200 ${isActive ? "border-b-4 py-1 border-[#df5454] font-semibold" : "text-[#000000]"}`}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                </NavLink></li>

                <li className="hover:scale-116 transition duration-200 ">
                    <NavLink to="/InicioSesion" className={({ isActive }) =>`items-center gap-2 transition duration-200 ${isActive ? "border-b-4 py-1 border-[#df5454] font-semibold" : "text-[#000000]"}`}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                </NavLink></li>
            </ul>
            </div>

            <i className="hover:scale-116 transition duration-200 flex items-center pr-7 md:hidden lg:hidden" onClick={() => setIsMenuOpen( !isMenuOpen )}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
            </i>
            
            {isMenuOpen && (
                <div className="absolute md:hidden lg:hidden top-[64px] py-4 w-[40%] bg-amber-100 flex flex-col items-center gap-6 transform transition-transform">      
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-amber-600 ">Inicio</NavLink>
                    <NavLink to="/Libros" onClick={() => setIsMenuOpen(false)} className="text-amber-600">Libros</NavLink>
                    <NavLink to="/Recetas" onClick={() => setIsMenuOpen(false)} className="text-amber-600">Recetas</NavLink>
                    <NavLink to="/Carrito" onClick={() => setIsMenuOpen(false)} className="text-amber-600">Carrito</NavLink>
                    <NavLink to="/InicioSesion" onClick={() => setIsMenuOpen(false)} className="text-amber-600">Inicio de sesión</NavLink>
                </div>
            )}

        </div>
    )
}