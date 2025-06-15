import { NavLink } from "react-router-dom"
import { useState } from "react"

export const InicioSesion = () => {
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")

    const handlerLogin = () => {
        console.log(email,contraseña)
    }

    return (
        <div className="w-[390px] h-[430px] mt-11 ml-[63%] pt-12 backdrop-blur-xs border-2 border-gray-400 flex flex-col gap-5 p-7 rounded-2xl relative ">
            <h2 className="text-center text-[23px]">Iniciar Sesión</h2>
            <form action="#" className="flex flex-col justify-center items-center gap-5 pt-6">
                <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" className="bg-gray-300 w-[180px] h-[30px] pl-2 rounded-[5px] outline-none" placeholder="Email"/>
                <input onChange={(e)=> setContraseña(e.target.value)} value={contraseña} type="password" className="bg-gray-300 w-[180px] h-[30px] pl-2 rounded-[5px] outline-none" placeholder="Contraseña"/>
                <button onClick={handlerLogin} className="bg-gray-400 w-[180px] h-[30px] rounded-[13px] hover:bg-gray-500">Iniciar Sesión</button>
                <p>¿No tienes cuenta?</p> 
                <NavLink to="/Registrarse" className="font-bold">Registrarse</NavLink>
            </form>
        </div>
    )
}
