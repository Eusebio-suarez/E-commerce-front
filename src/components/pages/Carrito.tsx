import { useEffect, useState } from "react";
import type { carritoproducts } from "../../types/carritoproducts";
import { getCart,realizarOrden } from "../../services/carritoaccion";
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

  const totalPrecio = carritoProducts.reduce(
    (acc, producto) => acc + Number(producto.precio) * (producto.cantidad as number),
    0
  );

  const handleRealizarOrden = async () => { 
    try {
      await realizarOrden(); 
      setCarritoProducts([]);
    } catch (error) {
     
      console.error("Error al finalizar la orden:", error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-10"
      style={{ backgroundImage: `url('/src/assets/fondocarrito.png')` }}
    >
      {carritoProducts.length === 0 ? (
        <div className="w-full flex flex-col justify-center h-full items-center content-center">
          <div className="border-2 mt-30 border-blue-500 border-l-transparent w-20 h-20 animate-spin rounded-full"></div>
          <p>Cargando...</p>
          <p className="text-gray-500">Agrega productos al carrito para verlos aquí.</p>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-30 gap-4 bg-amber-50 p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <div className="text-center mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Carrito de Compras</h2>
            <p className="text-lg text-gray-600">Aquí están los productos que has agregado.</p>
          </div>
          <AnimatePresence>
            {carritoProducts.map((producto) => (
              <motion.div
                key={producto.idProducto as number}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CardC
                  idLibro={(producto.idProducto as number)}
                  img={producto.foto as string}
                  nombre={producto.nombre_libro as string}
                  precio={producto.precio as number}
                  cantidad={producto.cantidad as number}
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
                onClick={handleRealizarOrden} // Usar el nuevo nombre del controlador
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