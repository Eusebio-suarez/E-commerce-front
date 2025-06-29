import { Navbar } from "../layouts/Navbar"

export const Encabezado = () => {
    return (
        <div className="bg-[#fff27a] fixed z-50 w-full h-[114px] border-b-10 border-[#f0cf2c]">
            <h1 className="text-[#ffffff] pl-20 text-[54px] flex justify-center text-center pt-3 absolute ">Inesita</h1>
            <Navbar></Navbar>
        </div>
    )
}