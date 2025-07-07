import { Navbar } from "../layouts/Navbar"

export const Encabezado = () => {
    return (
        <div className="bg-[#fff27a] fixed z-50 w-[100vw] h-[64px] border-b-10 border-[#f0cf2c] md:h-[90px] lg:h-[114px]">
            <h1 className="text-[#ffffff] py-2.5 text-[28px] pl-5 flex absolute sm-text[44px] sm:pl-12 md:text-[44px] lg:text-[54px] lg:pl-20">Inesita</h1>
            <Navbar></Navbar>
        </div>
    )
}
