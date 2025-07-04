import { useState, useEffect } from 'react';
import imgfondo from "../../assets/fondocarrito.png";


const EMPTY_CART_IMAGE_URL = "https://cdn-icons-png.flaticon.com/512/107/107831.png";


interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number; 
}

export const Carrito = () => {
    // cosas del carrito
    const [cartItems, setCartItems] = useState<Product[]>([]);
    // cargando
    const [isLoading, setIsLoading] = useState(true);
    //simulacion XD
    useEffect(() => {

        const fetchCartItems = async () => {
            setIsLoading(true);
            try {
            const response = await fetch("https://e-commerce-back-wtnc.onrender.com/api/carrito/producto", {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            // Mapear los campos del backend a los del frontend con validación y valores predeterminados
            const mappedItems: Product[] = data.map((item: any) => ({
                id: typeof item.id === "string" ? item.id : "",
                name: typeof item.nombre_libro === "string" ? item.nombre_libro : "Producto sin nombre",
                price: typeof item.precio === "number" ? item.precio : 0,
                imageUrl: typeof item.foto === "string" ? item.foto : EMPTY_CART_IMAGE_URL,
                quantity: typeof item.cantidad === "number" ? item.cantidad : 1,
            }));
            setCartItems(mappedItems);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCartItems();
    }, []); 

    // Persist cartItems to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Remove item handler
    const handleRemoveItem = (id: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Generate order handler
    const handleGenerateOrder = async () => {
        // TODO: Integrate with backend API to generate order
        console.log("Generando orden con los siguientes productos:", cartItems);
        alert("¡Orden generada exitosamente! (aca interaccion con api y llamados a base de datos)");
        try {
            await fetch("https://e-commerce-back-wtnc.onrender.com/api/carrito/producto", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.error("Error clearing backend cart:", error);
        }
        setCartItems([]); // Clear the cart after generating the order
    };

    return (
        <div
            className="min-h-screen w-full"
            style={{
                backgroundImage: `url(${imgfondo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-10 min-h-screen bg-white/80"> {/* Added bg-white/80 for readability */}
                <h2 className="text-4xl font-bold mb-8 text-gray-800">Carrito de Compras</h2>
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-48">
                            <p className="text-gray-600 text-lg">Cargando productos...</p>
                        </div>
                    ) : cartItems.length === 0 ? (
                        <div className="flex flex-col items-center">
                            <img
                                src={EMPTY_CART_IMAGE_URL}
                                alt="Carrito vacío"
                                className="w-32 h-32 mb-4"
                            />
                            <p className="text-gray-600 text-lg">Tu carrito está vacío</p>
                        </div>
                    ) : (
                        <>

                            <div className="divide-y divide-gray-200">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-center justify-between py-4">
                                        <div className="flex items-center space-x-4">
                                            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded" />
                                            <div>
                                                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                                <p className="text-gray-600">Precio: ${item.price.toFixed(2)}</p>
                                                <p className="text-gray-600">Cantidad: {item.quantity}</p>
                                                <p className="text-gray-600">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                        >
                                            Quitar
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <div className="flex justify-between items-center text-xl font-bold text-gray-800">
                                    <span>Total:</span>
                                    <span>{totalPrice.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</span>
                                </div>
                                <button
                                    onClick={handleGenerateOrder}
                                    className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Generar Orden de Compra
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};