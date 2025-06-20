import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="flex justify-end px-6 py-6">
            <div className="bg-[#ffffff] rounded-[50px] w-[550px] h-20 flex justify-center items-center text-[#000000] font-[450] text-[13.5px]">
            <ul className="gap-12 flex justify-center items-center text-start">

                <li className="hover:scale-116 transition duration-200 text">
                    <NavLink to="/" className={({ isActive }) =>`flex items-center gap-2 transition duration-200 ${isActive ? "text-white bg-[#df5454] px-2 py-2 w-[42px] rounded-xl font-semibold" : "text-[#000000]"}`}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="26"  height="26"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                </NavLink>Inicio</li>

                <li className="hover:scale-116 transition duration-200">
                    <NavLink to="/Libros" className={({ isActive }) =>`flex items-center gap-2 transition duration-200 ${isActive ? "text-white bg-[#df5454] px-2 py-2 w-[42px] rounded-xl font-semibold" : "text-[#000000]"}`}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-book-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M9 8h6" /></svg>
                </NavLink>Libros</li>

                <li className="hover:scale-116 transition duration-200">
                    <NavLink to="Recetas" className={({ isActive }) =>`flex items-center gap-2 transition duration-200 ${isActive ? "text-white bg-[#df5454] px-2 py-2 w-[42px] rounded-xl font-semibold" : "text-[#000000]"}`}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-tools-kitchen-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" /></svg>                  
                </NavLink>Recetas</li>

                <li className="hover:scale-116 transition duration-200">
                    <NavLink to="Carrito" className={({ isActive }) =>`flex items-center gap-2 transition duration-200 ${isActive ? "text-white bg-[#df5454] px-2 py-2 w-[42px] rounded-xl font-semibold" : "text-[#000000]"}`}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                </NavLink>Carrito</li>

                <li className="hover:scale-116 transition duration-200">
                    <NavLink to="InicioSesion" className={({ isActive }) =>`flex items-center gap-2 transition duration-200 ${isActive ? "text-white bg-[#df5454] px-2 py-2 w-[42px] rounded-xl font-semibold" : "text-[#000000]"}`}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                </NavLink>Inicio de sesión</li>
            </ul>
        </div>
        </div>
    )
}