import fotoFondo from "../../assets/fondoLibros.jpg"
import { CardL } from "../ui/CardL"
import { useEffect, useState } from "react" 
import { getBooks } from "../../services/libros"
import type { libro } from "../../types/libros"


export const Libros = () => {
    const [books, setBooks] = useState<libro[]>([])

    useEffect(() => {
        const fetchBooks = async () => {
            const books = await getBooks()
            setBooks(books.libros)
            console.log(books)
        }
        fetchBooks()
    },[])

    return (
        <div className="relative py-9">
            <div className="absolute w-full object-cover">
                <img 
                src={fotoFondo} 
                alt="fondo libros page" 
                className="w-full h-full object-cover fixed"/>
            </div>
            
            <div className="pt-14 relative justify-items-center md:pt-20 lg:pt-32">
                <div className="grid gap-5 sm:grid-cols md:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                    {books.map((book:libro) => (
                        <>
                        <CardL 
                            key={book.id_libro}
                            imagen = {book.foto}
                            titulo = {book.nombre_libro}
                            descripcion = {book.descripcion}
                            precio =  {book.precio}
                            idLibro = {book.id_libro}
                        />
                        </>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}