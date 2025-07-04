import { useState } from "react"
import { useEffect } from "react"
import type { Book } from "../../../types/books"
import { getBooks } from "../../services/libros"

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

    
    books.length === 0 ? (
      <div className="w-full  flex justify-center items-center">
        <div className="border-2 border-blue-500 border-l-transparent w-[25px] h-[25px] animate-spin rounded-full"></div>
      </div>
    ) :

    <div className=" flex flex-wrap shadow-2xl justify-center gap-10 w-4/5 p-10">
        {
          books.map((book)=>(
            <div key={book.id_libro} className="max-w-[460px] rounded-2xl bg-[#fefefe] shadow-xl hover:scale-[103%] transition duration-300 p-8 flex items-center gap-3">
              <img src={book.foto} className="w-24 h-32 object-cover rounded" alt="" />
              <div className="flex gap-1 flex-col">
                <p className="text-emerald-400 text-lg">{book.nombre_libro}</p>
                <p className="max-w-[200px] text-gray-700 text-sm max-h-[4.5rem] overflow-hidden line-clamp-3">{book.descripcion}</p>
                <p  className="text-amber-500">Precio : <span className="text-neutral-800">${book.precio}</span></p>
                <p className="text-red-400">Unidades : <span className="text-neutral-800">{book.stock}</span></p>
              </div>
              <div className="flex gap-2">
                <button aria-label="Editar usuario">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="#00ff7b"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
                </button>
                <button aria-label="Eliminar usuario">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="#ff0000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                </button>
              </div>
            </div>
          ))
        }
    </div>
  )
}
