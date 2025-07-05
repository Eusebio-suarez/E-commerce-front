import { useEffect, useState } from "react";
import DataTable, { type TableColumn } from "react-data-table-component";
import { getOrders } from "../../services/orders";
import type { Order } from "../../../types/orders";
import { OrdersChart } from "../charts/OrdersCharts";

export const Orders = () => {
  const columns: TableColumn<Order>[] = [
    {
      name: "ID",
      selector: row => row.id_orden,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: row => row.fecha,
      sortable: true,
    },
    {
      name: "Cliente",
      selector: row => row.nombre_usuario,
      sortable: true,
    },
    {
      name: "Productos",
      selector: row => row.num_productos,
      sortable: true,
    },
    {
      name: "Estado",
      selector: row => row.estado,
      sortable: true,
    },
    {
      name: "Total",
      selector: row => `${row.precio_total}`,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: () => (
        <div className="flex gap-2">
          <button title="Editar">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
          </button>
          <button title="Eliminar">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
          </button>
        </div>
      ),
    },
  ];

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      console.log(data);
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return orders.length === 0 ? (
    <div className="w-full flex justify-center items-center">
      <div className="border-2 border-blue-500 border-l-transparent w-[25px] h-[25px] animate-spin rounded-full"></div>
    </div>
  ) : (
    <>
    <div className="w-4/5 shadow-2xl mx-auto rounded-xl font-bold">
     <OrdersChart  orders={orders}></OrdersChart>
      <DataTable
        columns={columns}
        data={orders}
        fixedHeader
        pagination
        paginationPerPage={20}
        selectableRows
        customStyles={{
          headCells: {
            style: {
              fontSize: "14px",
              minHeight: "60px",
            },
          },
        }}
      />
    </div>
    </>
  );
};
