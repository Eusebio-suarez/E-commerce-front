import fotoFondo from "../../assets/fondoLibros.jpg"

//import { CardL } from "../ui/CardL"
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
        <div className="relative bg-amber-100 w-full pt-28 py-9">
            <div className="absolute w-full h- object-cover">
                <img 
                src={fotoFondo} 
                alt="fondo libros page" 
                className="w-full h-full object-cover fixed"/>
            </div>

        {books.length === 0 ? (
        <div className="w-full flex justify-center items-center h-full">
          <div className="border-2 mt-30 mb-30 border-blue-500 border-l-transparent w-20 h-20 animate-spin rounded-full"></div>
        </div>
      ) : (
            <div className="pt-10 relative">

                
                <div className="max-w-7xl mx-auto px-4 gap-7 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
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
        )}
        </div>
        
    )
}