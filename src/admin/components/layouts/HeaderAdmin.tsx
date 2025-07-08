import { logOaut } from "../../services/Users"
import { useNavigate } from "react-router-dom";


export const HeaderAdmin = () => {

  const Navigate = useNavigate()

  const handlerClick=async()=>{
    const response = await logOaut()
    
    if(response.ok){
      alert("Cerraste Sesion")
      Navigate("/inicioSesion")
    }
  }


  return (
    <header className="bg-[#fefefe] py-6 px-8 w-full shadow-md flex flex-col items-center gap-4 min-lg:flex-row min-lg:justify-between min-lg:gap-0">
      <div className="flex gap-1 items-center">
        <p className="text-xl font-medium text-neutral-900">Panel de Administración</p>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3b3b3b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-cog-icon lucide-user-round-cog hover:scale-105 transition-all duration-300"><path d="m14.305 19.53.923-.382"/><path d="m15.228 16.852-.923-.383"/><path d="m16.852 15.228-.383-.923"/><path d="m16.852 20.772-.383.924"/><path d="m19.148 15.228.383-.923"/><path d="m19.53 21.696-.382-.924"/><path d="M2 21a8 8 0 0 1 10.434-7.62"/><path d="m20.772 16.852.924-.383"/><path d="m20.772 19.148.924.383"/><circle cx="10" cy="8" r="5"/><circle cx="18" cy="18" r="3"/></svg>
          <p className="text-gray-700 font-medium text-[14px] flex flex-col">Administrador <span className="text-gray-500 text-[12px]">Nombre</span></p>
        </div>
        <button onClick={()=>{handlerClick()}} className="bg-[#3b67e9] text-white font-medium hover:bg-[#3152df] active:scale-[103%] transition-all duration-200 py-2 px-4 rounded-md flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path></svg>
          Cerrar Sesión
        </button>
      </div>
    </header>
  )
}
