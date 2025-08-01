import { NavLink} from "react-router-dom"
import fondo from "../../assets/rithwick-pr-SpXtY0d7VF0-unsplash.jpg"
import { Card } from "../ui/Card"
import libro2 from "../../assets/The Book of Pasta.jpg"
import libro3 from "../../assets/You Can Cook Everything_ A Comprehensive Guide to Home-Cooking Every Time.jpg"
import libro4 from "../../assets/Put On A Spread by Bed Threads.jpg"
import libro5 from "../../assets/Dumplings and Noodles.jpg"
import libro6 from "../../assets/descarga.jpg"
import libro7 from "../../assets/libro.jpg"
import libro8 from "../../assets/Paella_ The Original One-Pan Dish_ Over 50 Recipes for the Spanish Classic.jpeg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const Inicio = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
        {
            breakpoint: 700,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1180,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
    }

    return (
        <div>
            <div className="pt-16 flex justify-items-start items-center md:pt-20">
                <div className="relative">
                    <img src={fondo} alt="imagen de inicio" className="w-[100vw] h-[40vh] object-cover sm:h-[35px] md:h-[54vh] lg:h-[calc(100vh-134px)]"/>
                </div>
                <div className="absolute pl-4 sm:pl-14">
                    <h2 className="text-[44px] font-bold leading-10 text-[#e4e4e4] sm:text-7xl md:text-7xl lg:text-8xl lg:leading-24">Bienvenido a Inesita</h2>
                    <p className="text-[15px] mt-2.5 font-medium leading-4 text-[#e4e4e4] sm:text-2xl md:leading-6 lg:text-[25px] lg:leading-8">Recetas fáciles para todos los días, <br/> llevamos los sabores del mundo a tu mesa</p>
                    <NavLink to="/Recetas">
                    <button className="mt-4 text-[15px] w-[130px] text-white bg-[#df5454] rounded-[10px] hover:scale-103 transition duration-300 hover:bg-red-500 my-auto items-center sm:text-[15px] sm:h-9 sm:w-40 md:text-[18px] lg:text-[21px] lg:h-12 lg:w-55">Explorar Recetas</button>
                    </NavLink>
                </div>
            </div>

            <div className="bg-red-200 py-6">
                <div className="flex justify-center">
                <h3 className="text-[22px] font-semibold lg:text-[25px]">Libros Recomendados</h3>
                </div>

                <div className="flex flex-col px-14 py-[18px] overflow-hidden">
                    <Slider {...settings}>
                    <Card></Card>
                    <Card
                        titulo = "The Boock Of Pasta"
                        h3Class="pt-4"
                        pClass="pt-3 pb-3" 
                        precio= "$32.000.00"
                        img = {<img src={libro2} className="w-74 h-[290px] rounded-t-[10px] object-cover" alt="Libro1"/>}
                    />
                    <Card
                        titulo = "You Can Coock Everything: A Comprehensive Guide to Home-Cooking Every Time"
                        precio= "$25.000.00"
                        img = {<img src={libro3} className="w-74 h-[290px] rounded-t-[10px] object-cover" alt="Libro1" />}
                    />
                    <Card
                        titulo = "Put On A Spread by Bed Threads" 
                        h3Class="pt-3"
                        pClass="pt-2"                      
                        precio = "$34.000.00"
                        img = {<img src={libro4} className="w-74 h-[290px] rounded-t-[10px] object-cover" alt="Libro1"/>}
                    />
                    <Card
                        titulo="Dumplings and Noodles"
                        h3Class="pt-4"
                        pClass="pt-3 pb-3" 
                        precio= "$22.00.00"
                        img = {<img src={libro5} className="w-74 h-[290px] rounded-t-[10px] object-cover" alt="Libro1"/>}
                    />
                    <Card
                        titulo="Bitter Honey: Recipes and Stories from the Island of Sardinia"
                        precio="$34.000.00"
                        img= {<img src={libro6} className="w-74 h-[290px] rounded-t-[10px] object-cover" alt="Libro1"/>}
                    />
                    <Card
                        titulo="Bon Appetit Magazine August 2020 Simple Summer Recipes"
                        pClass="pt-3.5 pb-4" 
                        precio="$23.00.00"
                        img = {<img src={libro7} className="w-74 h-[290px] rounded-t-[10px] object-cover" alt="Libro1"/>}
                    />
                    <Card
                        titulo="Paella: The Original One-Pan Dish: Over 50 Recipes for the Spanish Classic"
                        precio="$50.000.00"
                        img={<img src={libro8} className="w-74 h-[290px] rounded-t-[10px] object-cover" alt="Libro1"/>}
                    />
                </Slider>
                </div>
            </div>
        </div>
    )
}