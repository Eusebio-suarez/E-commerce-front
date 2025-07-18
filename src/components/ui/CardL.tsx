
//nombre,precio,desc.id
//boton de compra al carrito id

import { añadirCarrito } from "../../services/añadirCarrito"

type CardLProps = {
    imagen ?: string,
    titulo ?: string,
    descripcion ?: string,
    precio ?: number,
    idLibro ?: number,
}

const añadir = async (idLibro: number | undefined) => {
    const data = await añadirCarrito(idLibro)
    console.log("dentra")

    console.log(data)

    if (data.ok){
        swal("Exito","Producto añadido correctamente","success")
    }

    if (!data.ok){
        swal("Error","No se pudo añadir el producto","error")
    }
}

export const CardL = ({ imagen, titulo, descripcion, precio, idLibro } : CardLProps) => {
    return (
        <div className="mx-auto flex">
            <div className="bg-white shadow-2xl shadow-black w-[290px] h-auto rounded-[13px] py-3 px-3 flex gap-3 md:justify-center md:items-center md:h-[360px] md:flex-col lg:w-[330px] lg:h-auto lg:gap-5 lg:py-6 overflow-hidden">
                
                <img src={imagen} 
                className="w-[85px] h-32 object-contain rounded-[8px] lg:w-auto lg:h-[180px]" 
                alt="Fondo de la Card de libros"/>

                <div className="flex flex-wrap gap-1 overflow-hidden md:justify-center md:items-center md:gap-2">
                    <h3 className="break-words font-bold text-[15px] text-gray-800 leading-5  md:text-[17px] md:text-center lg:text-[20px]">{titulo}</h3>
                    <p className="max-w-full break-words text-gray-700 text-[12px] lg:text-[16px] md:pb-3 md:mx-auto md:text-[14px] lg:text-center">{descripcion}</p>  
                    
                    <div className="max-w-full flex gap-3 md:gap-3 lg:gap-6">
                        <p className="font-semibold text-[14px] text-gray-800 md:text-[20px]">${precio}</p> 
                        
                        <button onClick={()=>{añadir(idLibro)}} 
                        className="bg-amber-300  w-[135px] h-7 text-[11px] flex justify-center items-center rounded-[11px] hover:scale-103 transition duration-300 hover:bg-amber-400 md:w-[155px] md:h-8 md:text-[16px] lg:font-semibold lg:w-[160px] lg:h-[35px]">
                            <svg width="24" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(360 0 0)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.31641 3.25C1.90219 3.25 1.56641 3.58579 1.56641 4C1.56641 4.41421 1.90219 4.75 2.31641 4.75H3.49696C3.87082 4.75 4.18759 5.02534 4.23965 5.39556L5.49371 14.3133C5.6499 15.424 6.60021 16.25 7.72179 16.25L18.0664 16.25C18.4806 16.25 18.8164 15.9142 18.8164 15.5C18.8164 15.0858 18.4806 14.75 18.0664 14.75L7.72179 14.75C7.34793 14.75 7.03116 14.4747 6.9791 14.1044L6.85901 13.2505H17.7114C18.6969 13.2505 19.5678 12.6091 19.8601 11.668L21.7824 5.48032C21.8531 5.25268 21.8114 5.00499 21.6701 4.81305C21.5287 4.62112 21.3045 4.50781 21.0662 4.50781H5.51677C5.14728 3.75572 4.37455 3.25 3.49696 3.25H2.31641ZM5.84051 6.00781L6.64807 11.7505H17.7114C18.0399 11.7505 18.3302 11.5367 18.4277 11.223L20.0478 6.00781H5.84051Z" fill="#000000"/>
                            <path d="M7.78418 17.75C6.81768 17.75 6.03418 18.5335 6.03418 19.5C6.03418 20.4665 6.81768 21.25 7.78418 21.25C8.75068 21.25 9.53428 20.4665 9.53428 19.5C9.53428 18.5335 8.75068 17.75 7.78418 17.75Z" fill="#000000"/>
                            <path d="M14.5703 19.5C14.5703 18.5335 15.3538 17.75 16.3203 17.75C17.2868 17.75 18.0704 18.5335 18.0704 19.5C18.0704 20.4665 17.2869 21.25 16.3204 21.25C15.3539 21.25 14.5703 20.4665 14.5703 19.5Z" fill="#000000"/>
                            </svg>
                        Añadir al carrito</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}
