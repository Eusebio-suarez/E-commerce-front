import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="flex justify-center pt-25 relative z-10">
            <div className="bg-[#32492f] rounded-[50px] w-[480px] h-13 flex justify-center items-center text-[#f5e9db] text-[20px] italic font-semibold">
            <ul className="gap-18 flex justify-center items-center">
                <li className="hover:scale-104 transition duration-200"><NavLink to="/">Inicio</NavLink></li>
                <li className="hover:scale-104 transition duration-200"><NavLink to="/Libros">Libros</NavLink></li>
                <li className="hover:scale-104 transition duration-200"><NavLink to="Recetas">Recetas</NavLink></li>
            </ul>
        </div>
        </div>
    )
}