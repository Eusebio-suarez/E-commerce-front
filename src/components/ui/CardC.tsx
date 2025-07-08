import { plus, minus } from "../../services/carritoaccion";

type CardCProps = {
  idLibro: number;
  img?: string;
  nombre?: string;
  precio?: number;
  cantidad?: number;

};


declare const swal: any;

export const CardC: React.FC<CardCProps> = ({
  idLibro,
  img,
  nombre,
  cantidad,
  precio,
  
}) => {
  const add = async (idLibro: number) => {
    try {
      const response = await plus(idLibro);
      const data = await response.json();

      if (response.ok) {
        swal("Éxito", "Producto añadido correctamente", "success");
      } else {
        swal("Error", data?.message || "No se pudo añadir el producto", "error");
      }
    } catch (error) {
      console.error("Error en add:", error);
      swal("Error", "Hubo un problema al añadir el producto", "error");
    }
  };

  const min = async (idLibro: number) => {
    try {
      const response = await minus(idLibro);
      const data = await response.json();

      if (response.ok) {
        swal("Éxito", "Producto reducido correctamente", "success");
      } else {
        swal("Error", data?.message || "No se pudo reducir el producto", "error");
      }
    } catch (error) {
      console.error("Error en min:", error);
      swal("Error", "Hubo un problema al reducir el producto", "error");
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl w-[80%] flex justify-between items-center gap-4 hover:scale-[1.02] transition-all duration-300 border-2 border-r-[5px] border-b-[5px] border-gray-[rgba(11,9,6,255)] shadow-[0_10px_20px_rgba(11,9,6,255)]">
      <div className="w-[120px]">
        {img && <img src={img} alt={nombre} className="w-full h-auto rounded-xl" />}
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-bold">{nombre}</h1>
        <p className="text-green-600 font-bold mt-1">Precio: ${precio}</p>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 h-10 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
            onClick={() => add(idLibro)}
          >
            +
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 h-10 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
            disabled={(cantidad as number) <= 1}
            onClick={() => min(idLibro)}
          >
            -
          </button>
        </div>
        <p className="text-gray-600 mt-1">Cantidad: {cantidad}</p>

      </div>
    </div>
  );
};