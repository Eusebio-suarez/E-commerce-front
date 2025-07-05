export const getOrders = async () => {
    const response = await fetch ("https://e-commerce-back-wtnc.onrender.com/api/ordenes",{
        method: "GET",
        headers: {
            "Content-type" : "application/json"
        },
        credentials: "include"
    });
    const data = await response.json();
    return data;
}