import { NavLink } from "react-router-dom"

type NavbarProps = {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navbar = ({ isLoggedIn, setIsLoggedIn } : NavbarProps) => {
    return (

        <div className="flex justify-end px-20 py-8">
            <div className="text-[rgb(0,0,0)] font-[450] text-[18px]">
            <ul className="gap-9 flex justify-center items-center text-start">

                <li className="hover:scale-116 transition duration-200 text flex flex-col items-center">
                    <NavLink to="/" className={({ isActive }) =>`gap-2 transition duration-200 ${isActive ? "border-b-4 py-1 border-[#df5454] font-semibold" : "text-[#000000]"}`}>
                    Inicio
                </NavLink></li>

                <li className="hover:scale-116 transition duration-200 flex flex-col items-center">
                    <NavLink to="/Libros" className={({ isActive }) =>`gap-2 transition duration-200 ${isActive ? "border-b-4 py-1 border-[#df5454] font-semibold" : "text-[#000000]"}`}>
                    Libros
                </NavLink></li>

                <li className="hover:scale-116 transition duration-200 flex flex-col items-center">
                    <NavLink to="Recetas" className={({ isActive }) =>`gap-2 transition duration-200 ${isActive ? "border-b-4 py-1 border-[#df5454] font-semibold" : "text-[#000000]"}`}>               
                    Recetas
                </NavLink></li>

                <li className="hover:scale-116 transition duration-200 flex flex-col items-center">
                    <NavLink to="Carrito" className={({ isActive }) =>` gap-2 transition duration-200 ${isActive ? "border-b-4 py-1 border-[#df5454] font-semibold" : "text-[#000000]"}`}>

                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                </NavLink></li>


                <li className="hover:scale-116 transition duration-200 flex flex-col items-center">
                    <NavLink to="InicioSesion" className={({ isActive }) =>`items-center gap-2 transition duration-200 ${isActive ? "border-b-4 py-1 border-[#df5454] font-semibold" : "text-[#000000]"}`}>

                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                </NavLink></li>

            </ul>
            </div>
        </div>
    )
}
