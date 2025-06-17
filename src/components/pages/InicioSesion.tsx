import { NavLink } from "react-router-dom"
import { useState, type ChangeEvent } from "react"

export const InicioSesion = () => {
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const handlerLogin = async (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email,contraseña)

        try{
            const response =  await fetch (`https://e-commerce-back-wtnc.onrender.com/api/iniciarSesion`, {
            method: "POST", 

            headers: {
                "Content-type": 'application/json'
            },

            credentials: "include",
            body: JSON.stringify({
                correo: email,
                contraseña: contraseña
                }),
            });
            const data = await response.json()
            console.log(data.mensaje)
        }
        catch(e:any){
            console.log("Error")
        }

        setEmail("")
        setContraseña("")
    }

    // Validar datos ingresados en los campos:


    return (
        <div className="w-[390px] h-[430px] mt-11 ml-[63%] pt-12 backdrop-blur-sm border-2 border-gray-400 flex flex-col gap-5 p-7 rounded-2xl relative ">
            <h2 className="text-center text-[25px] text-white">Iniciar Sesión</h2>
            <form onSubmit={handlerLogin} action="#" className="flex flex-col justify-center items-center gap-5 pt-5">
                <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" className="bg-gray-300 w-[180px] h-[30px] pl-2 rounded-[5px] outline-none" placeholder="Email"/>
                <input onChange={(e)=> setContraseña(e.target.value)} value={contraseña} type="password" className="bg-gray-300 w-[180px] h-[30px] pl-2 rounded-[5px] outline-none" placeholder="Contraseña"/>
                <button className="bg-yellow-400 w-[180px] h-[30px] rounded-[13px] text- hover:bg-yellow-600 hover:scale-95">Iniciar Sesión</button>
                <p className="text-white">¿No tienes cuenta?</p> 
                <NavLink to="/Registrarse" className="font-bold text-white no-underline hover:underline decoration-2">Registrarse</NavLink>
            </form>
        </div>
    )
}
