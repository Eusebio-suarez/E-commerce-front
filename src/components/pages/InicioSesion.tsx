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

            const data = await response.json()

            if(response.status==200){
                data.rol=="admin"? Navigate("/admin"): Navigate("/")
            }
            
            
            } else{
                setSuccessMSG('');
            }
        }
        catch(e:any){
            console.log("Error")
        }
    }


    return (

        <div className="pt-28 flex justify-center items-center">
            <div className="relative">
                <img src={imgSesion} alt="" className="w-[100vw] h-[calc(100vh-114px)] object-cover"/>
            </div>

            <div className= "absolute w-[390px] h-[430px] flex flex-col justify-center align-middle backdrop-blur-sm gap-4 rounded-2xl shadow-2xl shadow-black">
                <h3 className="text-center text-[28px] font-bold text-white">Iniciar Sesión</h3>
                <form onSubmit={validateForm} action="#" className="flex flex-col justify-center items-center gap-4 pt-4">
                    
                    <input onChange={(e)=> setFormInput({...FormInput, email: e.target.value})} value={FormInput.email} type="email" className="bg-gray-300 w-[240px] h-[30px] pl-2 rounded-[5px] outline-none" placeholder="Email"/>
                    <p className='text-red-700 text-[12px] font-semibold italic'>{FormErrors.email}</p>

                    <input onChange={(e)=> setFormInput({...FormInput, contraseña: e.target.value})} value={FormInput.contraseña} type="password" className="bg-gray-300 w-[240px] h-[30px] pl-2 rounded-[5px] outline-none" placeholder="Contraseña"/>
                    <p className='text-red-700 text-[12px] font-semibold italic'>{FormErrors.contraseña}</p> 

                    {successMSG && (
                        <p className="text-green-600 text-sm font-semibold mb-2">{successMSG}</p>
                    )}
                    
                    <button onClick={handlerLogin} className="bg-[#df5454] w-[240px] h-[30px] rounded-[8px] text-white hover:bg-[#c74b4b]">Iniciar Sesión</button>

                    <div className="flex justify-center gap-12 pt-12">
                        <p className="text-white">¿No tienes cuenta?</p> 
                        <NavLink to="/Registrarse" className="font-bold text-white no-underline hover:underline decoration-2">
                        <button className="bg-yellow-500 w-[120px] h-[30px] rounded-[8px] text-white hover:bg-yellow-600">Registrarse</button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>

    )
}
