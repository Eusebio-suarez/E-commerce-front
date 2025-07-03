import { useState } from "react"
import { useEffect } from "react"
import type { Book } from "../../../types/books"
import { getBooks } from "../../services/books"

export const Books = () => {

  const [books,setBooks] = useState<Book[]>([])

  useEffect(()=>{
    
    const fetchBooks = async()=>{
        const books = await getBooks()
        setBooks(books.libros)
        console.log(books)
    }

    fetchBooks()

  },[])
  return (
    <div>
        {
          books.map((book)=>(
            <p>{book.nombre_libro}</p>
          ))
        }
        
    </div>
  )
}
