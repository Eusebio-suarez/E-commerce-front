
export const getBooks = async () => {
  const response = await fetch("https://e-commerce-back-wtnc.onrender.com/api/mostrar", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"// 👈 SIN ESTO NO SE ENVÍAN LAS COOKIES
  });

  const data = await response.json();
  return data;
};
