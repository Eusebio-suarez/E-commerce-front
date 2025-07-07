import { useEffect, useState } from "react";
import type { carritoproducts } from "../../types/carritoproducts";
import { getCart, deleteCart } from "../../services/carritoaccion";
import { CardC } from "../ui/CardC";
import { motion, AnimatePresence } from "framer-motion";

export const Carrito = () => {
  const [carritoProducts, setCarritoProducts] = useState<carritoproducts[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getCart();
      setCarritoProducts(data);
    };
    fetchOrders();
  }, []);

  const eliminarProducto = async (id: number) => {
    try {
      await deleteCart(id);
      setCarritoProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  const incrementarCantidad = (id: number) => {
    setCarritoProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad: (p.cantidad as number) + 1 } : p
      )
    );
  };

  const decrementarCantidad = (id: number) => {
    setCarritoProducts((prev) =>
      prev.map((p) =>
        p.id === id && (p.cantidad as number) > 1 ? { ...p, cantidad: (p.cantidad as number) - 1 } : p
      )
    );
  };

  const totalPrecio = carritoProducts.reduce(
    (acc, producto) => acc + Number(producto.precio_total) * (producto.cantidad as number),
    0
  );

  const realizarOrden = () => {
    alert("¡Orden realizada! Gracias por tu compra.");
    // Aquí podrías limpiar el carrito o redirigir
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-10"
      style={{ backgroundImage: `url('/src/assets/fondocarrito.png')` }}
    >
      {carritoProducts.length === 0 ? (
        <div className="w-full flex justify-center items-center h-full">
          <div className="border-2 border-blue-500 border-l-transparent w-20 h-20 animate-spin rounded-full"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-30 gap-4 bg-amber-50 p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Carrito de Compras</h2>
            <p className="text-lg text-gray-600">Aquí están los productos que has agregado.</p>
          </div>
          <AnimatePresence>
            {carritoProducts.map((producto) => (
              <motion.div
                key={producto.id as number}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CardC
                  id={(producto.id as number)}
                  img={producto.foto as string}
                  nombre={producto.nombre_libro as string}
                  precio={producto.precio_total as number}
                  cantidad={producto.cantidad as number}
                  onDelete={eliminarProducto}
                  onIncrement={incrementarCantidad}
                  onDecrement={decrementarCantidad}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="flex flex-row justify-between items-center mt-6 w-full">
            <div className="mt-4 mx-5">
              <h2 className="text-2xl font-bold text-gray-800">Total:</h2>
              <p className="text-lg text-gray-600">${totalPrecio.toFixed(2)}</p>
            </div>
            <div className="mt-4 mx-5">
              <button
                onClick={realizarOrden}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Orden de Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};