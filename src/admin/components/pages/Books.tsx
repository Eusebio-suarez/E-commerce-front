import { useState, useEffect } from "react";
import type { Book } from "../../../types/books";
import { eliminateBook, getBooks, updateBook } from "../../services/libros";

export const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [modal,setModal] = useState(false)
  const [selectedBook,setSelectectBook] = useState<Partial<Book>>({})

  const handlerUpdate=( book: Book)=>{
    setModal(true)
    setSelectectBook(book)
    console.log(book)

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  if (!selectedBook || !selectedBook.id_libro) return;

  try {
    const data = await updateBook(selectedBook as Book); // casteamos para asegurarnos del tipo
    setModal(false); // cerramos modal
    console.log(data)
    alert(data.mensaje)
  } catch (error) {
    alert("Hubo un error al actualizar el libro.");
  }
};


const handlerDelete = async (id_libro: number) => {
  const confirmar = confirm("¿Estás seguro de que deseas eliminar este libro?");
  if (!confirmar) return;

  try {
    const data = await eliminateBook(id_libro);
    console.log(data)
    alert(data.mensaje);


  } catch (error) {
    alert("Hubo un error al eliminar el libro.");
    console.error(error);
  }
};


  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getBooks();
      setBooks(books.libros);
      console.log(books);
    };
    fetchBooks();
  },[]);

  return books.length === 0 ? (
    <div className="w-full flex justify-center items-center h-96">
      <div className="border-2 border-blue-500 border-l-transparent w-[25px] h-[25px] animate-spin rounded-full"></div>
    </div>
  ) : (
    <div className="w-full flex justify-center relative">
      <div className="w-full max-w-7xl py-10 flex flex-wrap justify-center gap-8">
        {books.map((book) => (
          <div
            key={book.id_libro}
            className="w-full sm:w-[320px] md:w-[400px] lg:w-[460px] rounded-2xl bg-[#fefefe] shadow-xl hover:scale-[103%] transition duration-300 p-6 flex flex-col sm:flex-row items-center gap-4"
          >
            <img
              src={book.foto}
              className="w-24 h-32 object-cover rounded"
              alt={book.nombre_libro}
            />
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-emerald-400 text-lg">{book.nombre_libro}</p>
              <p className="text-gray-700 text-sm line-clamp-3">{book.descripcion}</p>
              <p className="text-amber-500">
                Precio: <span className="text-neutral-800">${book.precio}</span>
              </p>
              <p className="text-red-400">
                Unidades: <span className="text-neutral-800">{book.stock}</span>
              </p>
            </div>
            <div className="flex gap-2 self-start sm:self-auto">
              <button onClick={()=>handlerUpdate(book)} aria-label="Editar libro">
                <svg xmlns="http://www.w3.org/2000/svg"width="22"height="22"viewBox="0 0 24 24"fill="none"stroke="#00ff7b"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
              </button>
              <button>
                <svg onClick={()=>handlerDelete(book.id_libro)}  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="#ff0000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      {
        modal && selectedBook &&
        <form onSubmit={handleSubmit} className="fixed top-[20%] p-12 gap-5 rounded-2xl shadow-2xl bg-[#fefefe] flex">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 font-medium">
              <label> Nombre</label>
              <input onChange={(e)=>{setSelectectBook({...selectedBook,nombre_libro: e.target.value})}} value={selectedBook.nombre_libro} className="bg-gray-100 px-3 w-sm py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-emerald-400" type="text" placeholder="nombre"/>
            </div>
            <div className="flex flex-col gap-2 font-medium">
              <label>Descripcionn</label>
              <textarea onChange={(e)=>{setSelectectBook({...selectedBook,descripcion: e.target.value})}}  value={selectedBook.descripcion} className="bg-gray-100 px-3 w-sm py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-emerald-400 " placeholder="descripcion" />
            </div>
            <div className="flex flex-col gap-2 font-medium">
              <label>Precio</label>
              <input onChange={(e)=>{setSelectectBook({...selectedBook,precio: parseFloat(e.target.value)})}} value={selectedBook.precio} className="bg-gray-100 px-3 w-sm py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-emerald-400" type="number" placeholder="precio" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 font-medium">
              <label>Stock</label>
              <input onChange={(e)=>{setSelectectBook({...selectedBook,stock: parseInt(e.target.value)})}} value={selectedBook.stock} className="bg-gray-100 px-3 w-sm  py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-emerald-400" type="number" placeholder="stock"/>
            </div>
            <div className="flex flex-col gap-2 font-medium">
              <label>Imagen</label>
              <input onChange={(e)=>{setSelectectBook({...selectedBook,foto:(e.target.value)})}} value={selectedBook.foto} className="bg-gray-100 px-3 w-sm py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-emerald-400" type="text" placeholder="imagen"/>
            </div>
            <div className="flex gap-4 mt-5">
              <button  onClick={()=>setModal(false)} type="button" className="py-1.5 px-4 rounded active:scale-105 transition-all duration-300 bg-red-400 text-white">Cancelar</button>
              <button type="submit" className="py-1.5 px-4 rounded active:scale-105 transition-all duration-300 bg-emerald-400 text-white">Actualizar</button>
            </div>
          </div>
        </form>
      }
    </div>
  );
};