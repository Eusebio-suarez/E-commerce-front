import { NavLink } from "react-router-dom"
import libro1 from "../../assets/Shop Lifestyle - Trouva.jpg"

type CardProps ={
    titulo?: string
    h3Class?: string
    pClass?: string
    precio?: any
    img?: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
    titulo = "Italian Street Food: Recipes From Italy's Bars and Hidden Laneways",
    h3Class= "",
    pClass= "",
    precio = "$23.000.00",
    img = <img src={libro1} className="w-[300px] h-[290px] rounded-t-[10px] object-cover" alt="Libro1" />,
}) => {
    return (
        <div className="py-5 flex justify-center hover:scale-103 transition duration-300">
            <div className="bg-white w-72 h-[460px] rounded-[10px] flex flex-col">
                {img}
                <div className="px-3.5 py-5">
                    <h3 className={`font-semibold text-[19px] leading-5 ${h3Class}`}>{titulo}</h3>
                    <p className={`text-[17px] pt-1 ${pClass}`}>{precio}</p>
                    <NavLink to="/Carrito">
                        <button className="bg-red-500 text-white text-17 font-semibold px-3.5 mt-3 w-full h-8 rounded-[5px] flex justify-center items-center-safe hover:scale-103 transition duration-300 hover:bg-red-400">
                        Agregar al carrito
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
