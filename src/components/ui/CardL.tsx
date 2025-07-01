import libro1 from "../../assets/You Can Cook Everything_ A Comprehensive Guide to Home-Cooking Every Time.jpg"

export const CardL = () => {
    return (
        <div className="flex items-start py-11 px-11">
            <div className="bg-amber-100 w-[520px] h-64 flex justify-start py-2.5 px-2.5 gap-5 rounded-[14px]">
                <img src={libro1} className="w-48 h-full  rounded-[10px]" alt="" />
                <div className="gap-10 content-center-safe">
                    <h3 className="font-semibold leading-5">You Can Coock Everything: A Comprehensive Guide to Home-Cooking Every Time</h3>
                    <p className="text-red-300 font-semibold">DK</p>
                    <p className="text-[15px] leading-5">
                        Un libro de cocina esencial para todas las cocinas con más de 275 
                        recetas y técnicas con fotografías paso a paso claramente ilustradas.
                    </p>
                    <div className="flex justify-start gap-7">
                        <p className="font-semibold">$25.000.00</p>
                        <button className="bg-amber-300 w-[110px] h-7 rounded-[8px] justify-center-safe">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
