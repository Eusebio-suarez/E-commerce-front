export type Order = {
  precio_total: number;
  id_orden: number;
  fecha: string;
  nombre_usuario: string;
  num_productos: number;
  estado: string; // o puede ser número si usas 0, 1, etc.
};
