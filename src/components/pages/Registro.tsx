import {useState} from 'react';
export const Registro = () => {

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

//"Metodo de validacion"

const validateForm = () => {

    const errors = { ...FormErrors };
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
    }
    if (formInput.password !== formInput.passwordConfirm) {
        errors.passwordConfirm = 'Las contraseñas no coinciden';
        isValid = false;
    }
    setFormErrors(errors);
    return isValid;
};

//Validar campos

const handleRegister = () => {
    if (validateForm()) {
        setSuccessMSG('¡Registro exitoso!');
        console.log('Usuario registrado:', formInput);
    } else {
        setSuccessMSG('');
    }
}

 return (
    <div className='w-[80%] h-[80%] bg-white max-[750px]:flex-col rounded-lg shadow-lg flex flex-row items-center justify-center p-4  mt-10'>
 
        <div className='w-[50%] max-[750px]:w-[100%] m-5 h-full flex items-center justify-center flex-col bg-linear-to-t from-yellow-400 to-yellow-200 rounded-lg'>
            <h2 className='text-4xl p-[40%] font-bold text-yellow-600 mb-4'>Bienvenido...</h2>
        </div>

        <div className='w-[50%] max-[750px]:w-[100%] h-full flex items-center justify-center'>
            <form onSubmit={validateForm} className='w-full max-w-sm'>
                <div className='mb-4'>

                    <label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='username'>
                        Registrate
                    </label>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                        Nombre
                    </label>
                    <input value={formInput.username} onChange={(e) => setFormInput({...formInput, username: e.target.value})} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' />
                    <p className='text-red-500 text-xs italic'>{FormErrors.username}</p>
                </div>

                <div className='mb-4'>

                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                        Contraseña
                    </label>
                    <input value={formInput.password} onChange={(e) => setFormInput({...formInput, password: e.target.value})} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='******************' />
                    <p className='text-red-500 text-xs italic'>{FormErrors.password}</p> 

                </div>

                <div className='mb-4'>

                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='passwordconfirm'>
                        Confirmar contraseña
                    </label>
                    <input value={formInput.passwordConfirm} onChange={(e) => setFormInput({...formInput, passwordConfirm: e.target.value})} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='passwordconfirm' type='password' placeholder='******************' />
                    <p className='text-red-500 text-xs italic'>{FormErrors.passwordConfirm}</p>
                    
                </div>

                <div className='mb-6'>

                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Correo Electrónico
                    </label>
                    <input value={formInput.email} onChange={(e) => setFormInput({...formInput, email: e.target.value})} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='correo@ejemplo.com' />
                    <p className='text-red-500 text-xs italic'>{FormErrors.email}</p>

                </div>

                {successMSG && (
                    <p className="text-green-600 text-sm font-semibold mb-2">{successMSG}</p>
                )}
                <div className='flex items-center justify-between'>
                    <button onClick={handleRegister} className='submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
