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
        <div className="bg-amber-100 w-full pt-40 py-9">
        <div className="max-w-7xl mx-auto px-4 gap-7 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 relative">
            {books.map((book:libro) => (
                <>
                <CardL
                    key={book.id_libro}
                    imagen = {book.foto}
                    titulo = {book.nombre_libro}
                    descripcion = {book.descripcion}
                    precio =  {book.precio}
                    boton = 'Añadir al carrito'
                />
                </>
            ))
            }
        </div>
        </div>
    )
}