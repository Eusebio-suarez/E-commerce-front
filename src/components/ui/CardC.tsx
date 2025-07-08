import { plus } from "../../services/carritoaccion";
import { minus } from "../../services/carritoaccion";

type CardCProps = {
  id: number;
  img?: string;
  nombre?: string;
  precio?: number;
  cantidad?: number;
  onDelete?: (id: number) => void;
  onIncrement?: (id: number) => void;
  onDecrement?: (id: number) => void;
};

export const CardC: React.FC<CardCProps> = ({
  id,
  img,
  nombre,
  cantidad,
  precio,

}) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-[500px] flex justify-between items-center gap-4 hover:scale-[1.02] transition-all duration-300">
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
            className="bg-blue-500 text-white px-4 py-2 h-10 rounded-xl hover:bg-blue-700 transition"
            onClick={() => plus(id)}
          >
            +
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 h-10 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
            disabled={(cantidad as number) <= 1}
            onClick={() => minus(id)}
          >
            -
          </button>
        </div>
        <p className="text-gray-600 mt-1">Cantidad: {cantidad}</p>

      </div>
    </div>
  );
};