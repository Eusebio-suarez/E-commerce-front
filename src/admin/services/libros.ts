import type { Book } from "../../types/books";

export const getBooks = async () => {
    const response = await fetch ("https://e-commerce-back-wtnc.onrender.com/api/mostrar",{
        method: "GET",
        headers: {
            "Content-type" : "application/json"
        },
        credentials: "include"
    });
    const data = await response.json();
    return data;
}


export const updateBook = async (libro: Book) => {
  try {
    const response = await fetch(`https://e-commerce-back-wtnc.onrender.com/api/libros/${libro.id_libro}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',

      },
      credentials: "include",
      body: JSON.stringify(libro),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el libro');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const eliminateBook = async (id_libro: number) => {
    console.log(id_libro)
  if (!id_libro) throw new Error("ID de libro inválido");

  const response = await fetch(`https://e-commerce-back-wtnc.onrender.com/api/eliminar`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: "include",
    body: JSON.stringify({ id_libro }), // 👈 aquí va el id
  });

  if (!response.ok) {
    const errorData = await response.json(); // para ver qué responde el backend
    console.error("Respuesta del backend:", errorData);
    throw new Error(errorData.mensaje || 'Error al eliminar el libro');
  }

  const data = await response.json();
  return data;
};
