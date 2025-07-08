import { NavLink, useNavigate } from "react-router-dom"
import { useState} from "react"
import imgSesion from '../../assets/receta.jpg'

export const InicioSesion = () => {
    //Definición de las variables de  Error e Inputs:

    //1. Guarda los valores ingresados en el formulario (Se actualiza con onChange)
    const [FormErrors, setFormErrors] = useState ({
        email: '',
        contraseña: '',
    });


    //2. Guarda los mensajes de error si el usuario no escribe algo requerido
    const [FormInput, setFormInput] = useState({
        email: '',
        contraseña: '',
    });


    // 3.Guarda un mensaje si la validación falla, o algún mensaje exitoso
    const [successMSG, setSuccessMSG] = useState('');


    // Método de validación y muestra de errores.
    const validateForm = () => {
        const errors = {
            email: '',
            contraseña: '',
        }
        let isValid = true;

        if (!FormInput.email){
            errors.email = 'Email es requerido';
            isValid = false;
        }
        if (!FormInput.contraseña){
            errors.contraseña = 'Contraseña es requerida';
            isValid = false;
        }

        setFormErrors(errors); // Actualiza los errores para mostrarlos en pantalla
        return isValid // Indica si la validación es exitosa
    };
    const Navigate = useNavigate()



    //Validar Campos
    const handlerLogin = async () => {
        try{

            if (validateForm()){
            const response =  await fetch (`https://e-commerce-back-wtnc.onrender.com/api/iniciarSesion`, {
                method: "POST", 
                headers: {"Content-type": 'application/json'},
                credentials: "include",
                body: JSON.stringify({
                    correo: FormInput.email,
                    contraseña: FormInput.contraseña
                }),
            });

            console.log(response)

            if (response.status === 200){
                Navigate("/")
            }

            const data = await response.json()
            console.log(data.mensaje)
            
            } else{
                setSuccessMSG('');
            }
        }
        catch(e:any){
            console.log("Error")
        }
    }


    return (

        <div className="pt-16 flex justify-center items-center md:pt-20 lg:pt-28">
            <div className="relative">
                <img src={imgSesion} alt="" className="w-[100vw] h-[calc(100vh-114px)] object-cover"/>
            </div>

            <div className= "absolute w-[270px] h-[330px] flex flex-col justify-center align-middle backdrop-blur-sm  rounded-2xl shadow-2xl shadow-black md:w-[310px] md:h-[350px]  lg:w-[390px] lg:h-[440px]">
                <h4 className="text-[28px] text-center font-bold text-white lg:text-[33px]">Iniciar Sesión</h4>
                <form onSubmit={validateForm} action="#" className="flex flex-col justify-center items-center ">
                    
                    <input onChange={(e)=> setFormInput({...FormInput, email: e.target.value})} value={FormInput.email} type="email" 
                    className="bg-gray-300 w-[210px] h-[26px] mt-5 pl-2 rounded-[5px] outline-none md:w-[240px] md:h-[30px] lg:mt-8 lg:w-[260px] lg:h-[30px]" placeholder="Email"/>
                    <p className='text-red-700 text-[12px] font-semibold italic'>{FormErrors.email}</p>

                    <input onChange={(e)=> setFormInput({...FormInput, contraseña: e.target.value})} value={FormInput.contraseña} type="password" 
                    className="bg-gray-300 w-[210px] h-[27px] mt-5 pl-2 rounded-[5px] outline-none md:w-[240px] md:h-[30px] lg:mt-8 lg:w-[260px] lg:h-[30px]" placeholder="Contraseña"/>
                    <p className='text-red-700 text-[12px] font-semibold italic'>{FormErrors.contraseña}</p> 

                    {successMSG && (
                        <p className="text-green-600 text-sm font-semibold mb-3">{successMSG}</p>
                    )}
                    
                    <button onClick={handlerLogin} className="bg-[#df5454] w-[210px] h-[27px] mt-4 rounded-[8px] text-white hover:bg-[#c74b4b] md:w-[240px] md:h-[27px] lg:mt-8 lg:w-[260px] lg:h-[30px]">Iniciar Sesión</button>

                    <div className="flex justify-center gap-3 pt-6 md:gap-9 md:pt-12">
                        <p className="text-white text-[15px]">¿No tienes cuenta?</p> 
                        <NavLink to="/Registrarse" className="font-semibold text-white no-underline hover:underline decoration-2">
                        <button className="bg-yellow-500 text-[15px] w-[100px] h-[25px] rounded-[8px] text-white hover:bg-yellow-600 md:w-[120px] md:h-[30px] lg:font-bold">Registrarse</button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>

    )
}