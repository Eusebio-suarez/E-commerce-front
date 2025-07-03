export const añadirCarrito = async (idProducto: number|undefined) => {
    const response = await fetch ("https://e-commerce-back-wtnc.onrender.com/api/carrito/agregar",{
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        credentials: "include",
        body:JSON.stringify ({
            idProducto: idProducto,
            cantidad: 1,
        })
    });;
    
    return response;
}