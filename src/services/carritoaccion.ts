import type { carritoproducts } from "../types/carritoproducts";

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