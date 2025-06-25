import { NavLink, useNavigate } from "react-router-dom"
import { useState} from "react"

export const InicioSesion = () => {
    //Definición de las variables de  Error e Inputs
    const [FormErrors, setFormErrors] = useState ({
        email: '',
        contraseña: '',
    });

    const [FormInput, setFormInput] = useState({
        email: '',
        contraseña: '',
    });

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
        setFormErrors(errors);
        return isValid
    };

    const Navigate = useNavigate()

    //Validar Campos
    const handlerLogin = async () => {

        try{
            if (validateForm()){
    
            const response =  await fetch (`https://e-commerce-back-wtnc.onrender.com/api/iniciarSesion`, {
            method: "POST", 
            headers: {
                "Content-type": 'application/json'
            },

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
        <div className= "w-[390px] h-[430px] mt-11 ml-[63%] pt-9 backdrop-blur-sm border-2 border-gray-400 flex flex-col gap-5 p-7 rounded-2xl relative ">
            <h3 className="text-center text-[25px] text-white">Iniciar Sesión</h3>
            <form onSubmit={validateForm} action="#" className="flex flex-col justify-center items-center gap-4 pt-4">
                <input onChange={(e)=> setFormInput({...FormInput, email: e.target.value})} value={FormInput.email} type="email" className="bg-gray-300 w-[180px] h-[30px] pl-2 rounded-[5px] outline-none" placeholder="Email"/>
                <p className='text-red-700 text-[12px] font-semibold italic'>{FormErrors.email}</p>

                <input onChange={(e)=> setFormInput({...FormInput, contraseña: e.target.value})} value={FormInput.contraseña} type="password" className="bg-gray-300 w-[180px] h-[30px] pl-2 rounded-[5px] outline-none" placeholder="Contraseña"/>
                <p className='text-red-700 text-[12px] italic'>{FormErrors.contraseña}</p> 

                {successMSG && (
                    <p className="text-green-600 text-sm font-semibold mb-2">{successMSG}</p>
                )}
                <button onClick={handlerLogin} className="bg-yellow-400 w-[180px] h-[30px] rounded-[13px] text- hover:bg-yellow-600 hover:scale-95">Iniciar Sesión</button>
                <p className="text-white">¿No tienes cuenta?</p> 
                <NavLink to="/Registrarse" className="font-bold text-white no-underline hover:underline decoration-2">Registrarse</NavLink>
            </form>
        </div>
    )
}
