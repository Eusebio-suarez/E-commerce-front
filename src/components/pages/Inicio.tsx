import { NavLink } from "react-router-dom"
import fondo from "../../assets/fondo4.png"

export const Inicio = () => {
    return (
        <div className="bg-[#ffffff] w-full h-[calc(100vh-136px)] flex justify-center items-center ">
            <div className="flex flex-col w-1/2">
                <h2 className="text-8xl font-bold text-[#161616]">Bienvenido a Inesita</h2>
                <p className="text-[25px]">Recetas fáciles para todos los días, <br/> llevamos los sabores del mundo a tu mesa</p>
                <NavLink to="/Recetas">
                <button className="mt-6 text-[21px] font-stretch-100% text-white bg-[#df5454] h-12 w-40 rounded-[25px] my-auto items-center">Ver recetas</button>
                </NavLink>
            </div>
            <div>
                <img src={fondo} alt="imagen de inicio" className="w-[500px]  object-cover inset-shadow shadow-xl shadow-black/30 rounded-4xl"/>
            </div>
        </div>
    )
}