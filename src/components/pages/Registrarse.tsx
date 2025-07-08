import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import imgRegistro from '../../assets/receta.jpg'

export const Registrarse = () => {

//Definicion de las variables de Error e Inputs
const [FormErrors, setFormErrors] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    email: ''
});

const [formInput, setFormInput] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    email: ''
});


const [successMSG, setSuccessMSG] = useState('');

//"Metodo de validacion" y muestra de errores

const validateForm = () => {

    const errors = {
        username: '',
        password: '',
        passwordConfirm: '',
        email: ''
    };

    let isValid = true;
    if (!formInput.username) {
        errors.username = 'El nombre de usuario es requerido';
        isValid = false;
    }
    if (!formInput.password) {
        errors.password = 'La contraseña es requerida';
        isValid = false;
    }
    if (!formInput.passwordConfirm) {
        errors.passwordConfirm = 'La confirmación de contraseña es requerida';
        isValid = false;
    }
    if (!formInput.email) {
        errors.email = 'El correo electrónico es requerido';
        isValid = false;
    } else {
        // Simple email regex for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formInput.email)) {
            errors.email = 'El correo electrónico no es válido';
            isValid = false;
        }
    }
    if (formInput.password !== formInput.passwordConfirm) {
        errors.passwordConfirm = 'Las contraseñas no coinciden';
        isValid = false;
    }
    setFormErrors(errors);
    return isValid;
};

//Validar campos

const handleRegister = async () => {
    try{
        if (validateForm()) {

            const response = await fetch("https://e-commerce-back-wtnc.onrender.com/api/registrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                
                credentials:"include",

                body: JSON.stringify({
                    nombre: formInput.username,
                    correo: formInput.email,
                    contraseña: formInput.password
                })
            });

            const data = await response.json();
            console.log(data);

            } else {
            setSuccessMSG('');
        }
    }
    catch{
        console.log("ERROR.")
    }
}

 return (

    <div className='w-full flex content-center items-center justify-center pt-14 lg:pt-24'>
        <div className="relative">
            <img src={imgRegistro} alt="" className="w-[100vw] h-[100vh] object-cover"/>
        </div> 
        <div className='absolute mb-5 mt-5 py-11 w-[280px] h-[90%] max-[750px]:flex-col backdrop-blur-xm backdrop-blur-sm gap-4 rounded-2xl shadow-2xl shadow-black flex flex-row items-center content-center justify-center p-4 md:w-[370px] md:h-[80%] lg:w-[390px] '>
            <div className='w-[100%] h-full flex items-center justify-center'>
                <form onSubmit={validateForm} className='w-full max-w-sm flex flex-col items-center'>
                    <div className='lg:mb-4'>
                        <h4 className='text-center text-[28px] font-bold text-white lg:text-[32px]'>Registrate</h4>
                        <label className='block text-gray-100 text-sm font-bold mb-2 pt-5' htmlFor='username'>
                            Nombre
                        </label>
                        <input value={formInput.username} onChange={(e) => setFormInput({...formInput, username: e.target.value})} className='bg-gray-300 w-[240px] h-[30px] pl-2 rounded-[5px] outline-none' id='username' type='text' placeholder='Username' />
                        <p className='text-red-500 text-xs italic'>{FormErrors.username}</p>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-100 text-sm font-bold mb-2' htmlFor='password'>
                            Contraseña
                        </label>
                        <input value={formInput.password} onChange={(e) => setFormInput({...formInput, password: e.target.value})} className='bg-gray-300 w-[240px] h-[30px] pl-2 rounded-[5px] outline-none' id='password' type='password' placeholder='******************' />
                        <p className='text-red-500 text-xs italic'>{FormErrors.password}</p> 
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-100 text-sm font-bold mb-2' htmlFor='passwordconfirm'>
                            Confirmar contraseña
                        </label>
                        <input value={formInput.passwordConfirm} onChange={(e) => setFormInput({...formInput, passwordConfirm: e.target.value})} className='bg-gray-300 w-[240px] h-[30px] pl-2 rounded-[5px] outline-none' id='passwordconfirm' type='password' placeholder='******************' />
                        <p className='text-red-500 text-xs italic'>{FormErrors.passwordConfirm}</p>
                        
                    </div>

                    <div className='mb-6'>
                        <label className='block text-gray-100 text-sm font-bold mb-2' htmlFor='email'>
                            Correo Electrónico
                        </label>
                        <input value={formInput.email} onChange={(e) => setFormInput({...formInput, email: e.target.value})} className='bg-gray-300 w-[240px] h-[30px] pl-2 rounded-[5px] outline-none' id='email' type='email' placeholder='Correo@ejemplo.com' />
                        <p className='text-red-500 text-xs italic'>{FormErrors.email}</p>
                    </div>

                    {successMSG && (
                        <p className="text-green-600 text-sm font-semibold mb-2">{successMSG}</p>
                    )}

                    <div className='flex flex-col items-center gap-4 md:flex-row lg:gap-6'>
                        <button onClick={handleRegister} className='submit bg-yellow-500 w-[95px] h-7 lg:w-[120px] lg:h-[40px] rounded-[8px] text-white hover:bg-yellow-600 font-bold focus:outline-none focus:shadow-outline' type='button'>
                            Register
                        </button>
                        <button className='submit bg-gray-100 hover:bg-gray-500 text-gray-700  hover:text-gray-100 font-bold w-[160px] h-7 lg:w-[170px] lg:h-[30px] rounded-[8px] focus:outline-none focus:shadow-outline'>
                            Iniciar con Google 
                        </button>
                    </div>

                    <p className="text-yellow-200 font-semibold pt-5">¿Ya tienes cuenta?</p> 
                    <NavLink to="/InicioSesion" className="font-bold text-yellow-200 no-underline hover:underline decoration-2">Inicia Sesion</NavLink>
                </form>
            </div>
        </div>
    </div>
  )
}
