import { getUsers } from "../../services/Users";
import { useEffect, useState } from "react";
import type { user } from "../../../types/users";
import DataTable, { type TableColumn } from "react-data-table-component";

export const Users = () => {
  const columns: TableColumn<user>[] = [
    {
      name: "Id",
      selector: row => row.id_usuario,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: row => row.nombre_usuario,
      sortable: true
    },
    {
      name: "Correo",
      selector: row => row.correo,
      sortable: true
    },
    {
      name: "Rol",
      selector: row => row.rol,
      sortable: true
    },
    {
      name: "Fecha",
      selector: row => row.fecha_creacion || "-", 
      sortable: true// o lo que tengas
    },
    {
      name: "Acciones",
      cell: () => (
        <div className="flex gap-2">
          <button>
              <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="#00ff7b"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
          </button>
          <button>
              <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="#ff0000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
          </button>
        </div>
        ),
    }

  ];

  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      console.log(users);
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    users.length === 0 ? (
   <div className="w-full flex justify-center items-center h-96">
      <div className="border-2 border-blue-500 border-l-transparent w-[25px] h-[25px] animate-spin rounded-full"></div>
    </div>
    ) : (
      <div className="w-4/5 shadow-2xl mx-auto mt-10 rounded-xl font-bold">
        <DataTable
          columns={columns}
          data={users}
          fixedHeader
          pagination
          paginationPerPage={20}
          selectableRows
          customStyles={{
            headCells:{
              style:{
                fontSize: '14px',
                minHeight: '60px',
              }
            }
          }}
        />
      </div>
    )
  );
};
