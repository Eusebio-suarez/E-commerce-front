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