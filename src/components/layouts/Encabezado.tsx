import { Navbar } from "./Navbar"

export const Encabezado = () => {
    return (
        <div className="bg-[#3d5b39] w-full h-33 border-b-10 border-[#946038] relative">
            <Navbar></Navbar>
                <img src="/src/assets/inecitaRecetas.svg" className="absolute w-25 h-25 top-0 right-[50%] left-[50%] translate-x-[-50%]" alt="imagen de encabezado"/>
        </div>
    )
}
