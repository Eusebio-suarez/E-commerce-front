import type { carritoproducts } from "../types/carritoproducts";
declare const swal: any; 

export const getCart = async (): Promise<carritoproducts[]> => {
  try {
    const response = await fetch("https://e-commerce-back-wtnc.onrender.com/api/carrito/productos", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();
    console.log("Respuesta completa del carrito:", data);

    if (data && data.success && Array.isArray(data.products)) {
      return data.products;
    }

    console.error("Respuesta inesperada de la API:", data);
    return [];
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
    return [];
  }
};

export const deleteCart = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`https://e-commerce-back-wtnc.onrender.com/api/carrito/productos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error al eliminar el carrito");
    }

    console.log("Carrito eliminado exitosamente");
  } catch (error) {
    console.error("Error al eliminar el carrito:", error);
  }
}

export const plus = async (idProducto: number) => {
    const response = await fetch ("https://e-commerce-back-wtnc.onrender.com/api/carrito/agregar",{
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        credentials: "include",
        body:JSON.stringify ({
            id: idProducto,
            cantidad: 1,
        })
    });

    if (!response.ok) {
        throw new Error("Error al agregar producto");
    }
    return response;
}

export const minus = async (idProducto: number) => {
  const response = await fetch("https://e-commerce-back-wtnc.onrender.com/api/carrito/eliminar", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
        id: idProducto,
      cantidad: 1,
    }),
  });

  if (!response.ok) {
    throw new Error("Error al eliminar producto (decrement)");
  }

  return response;
};

export const realizarOrden = async () => {
  try {
    const response = await fetch("https://e-commerce-back-wtnc.onrender.com/api/ordenes/crear", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error al realizar la orden");
    }
    const data = await response.json();
    console.log("Orden realizada:", data);
    swal("Éxito", "Orden realizada exitosamente.", "success");
    return data; 
  } catch (error) {
    console.error("Error al realizar la orden:", error);
    swal("Error", "Error al realizar la orden.", "error");
    throw error; 
  }
}