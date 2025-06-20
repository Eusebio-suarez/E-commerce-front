import { Navbar } from "../layouts/Navbar"

export const Encabezado = () => {
    return (
        <div className="bg-[#f0cf2c] w-full h-33 border-b-10 border-[#fff27a] relative">
            <h1 className="text-[#ffffff] pl-20 text-[54px] flex justify-center text-center pt-3 absolute ">Inesita</h1>
            <Navbar></Navbar>
        </div>
    )
}