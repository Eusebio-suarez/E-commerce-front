import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <div className="bg-[#fff27a] w-full h-auto relative z-20 py-3">
            <div className="flex gap-12 pt-7 justify-center pb-3.5 text-[18px] mx-auto border-b-2 w-[90%] border-[#f0cf2c] z-50 md:items-start lg:gap-32">
                
                <div className="flex flex-col gap-4 lg:gap-18 lg:flex-row md:flex-row md:gap-10">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-[17px] lg:text-[20px]">Inesita</h3>
                        <p className="text-[15px] lg:text-[18px]">Tu destino culinario favorito</p>
                    </div>
                    <div className="flex flex-col">      
                        <h3 className="font-bold mb-1 text-[17px] md:text-[20px] lg:text-[20px]">Enlaces Rápidos</h3>
                        <div className="grid grid-cols-2 md:grid-cols-1">
                            <NavLink className="hover:text-[#df5454] text-[15px] lg:text-[18px]" to="/">Inicio</NavLink>
                            <NavLink className="hover:text-[#df5454] text-[15px] lg:text-[18px]" to="/Libros">Libros</NavLink>
                            <NavLink className="hover:text-[#df5454] text-[15px] lg:text-[18px]" to="/Recetas">Recetas</NavLink>
                            <NavLink className="hover:text-[#df5454] text-[15px] lg:text-[18px]" to="/Carrito">Carrito</NavLink>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 lg:gap-18 lg:flex-row md:flex-row md:gap-10">
                    <div>
                        <h3 className="font-bold text-[17px] lg:text-[20px]">Contacto</h3>
                        <p className="text-[15px] lg:text-[18px]">+57 300 000 000</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-[17px] lg:text-[20px]">Síguenos</h3>
                        <div className="flex w-[88px] lg:text-[18px]">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-gmail w-7 h-7 hover:text-[#df5454]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" /><path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" /><path d="M16 4l-4 4l-4 -4" /><path d="M4 6.5l8 7.5l8 -7.5" /></svg>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook w-7 h-7 hover:text-[#df5454]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram w-7 h-7 hover:text-[#df5454]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x w-7 h-7 hover:text-[#df5454]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-4 text-[14px] font-semibold lg:text-[18px]">
                <p>© 2025 Inesita. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}
