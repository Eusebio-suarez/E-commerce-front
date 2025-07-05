
export const getUsers = async () => {
  const response = await fetch("https://e-commerce-back-wtnc.onrender.com/api/usuarios", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"// 👈 SIN ESTO NO SE ENVÍAN LAS COOKIES
  });

  const data = await response.json();
  return data;
};

export const logOaut = async () => {
  const response = await fetch("https://e-commerce-back-wtnc.onrender.com/api/cerrarSesion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"// 👈 SIN ESTO NO SE ENVÍAN LAS COOKIES
  });

  const data = await response.json();

  console.log(data)
  
  return response;
};
