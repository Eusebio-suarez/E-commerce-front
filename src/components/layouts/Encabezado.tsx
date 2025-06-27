import { Navbar } from "../layouts/Navbar"

export const Encabezado = () => {
    return (
        <div className="bg-[#f0cf2c] w-full h-33 max-[800px]:h-auto border-b-10 flex-col flex border-[#fff27a] relative max-[500px]:flex max-[500px]:flex-col">
            <h1 className="text-[#ffffff] pl-20 text-[54px] flex justify-center text-center pt-3 absolute max-[800px]:relative  max-[800px]:pl-0 ">Inesita</h1>
            <Navbar></Navbar>
        </div>
    )
}