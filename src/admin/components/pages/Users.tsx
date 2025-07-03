import { getUsers } from "../../services/Users"
import { useEffect, useState } from "react"
import type { user } from "../../../types/users"
export const Users = () => {

  const [users,setUsers] = useState<user[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers()
      console.log(users)
      setUsers(users)
    }
    fetchUsers()
  }, [])

  return (

    users.length === 0 ? (
      <div className="w-full  flex justify-center items-center">
        <div className="border-2 border-blue-500 border-l-transparent w-[25px] h-[25px] animate-spin rounded-full"></div>
      </div>
    ) :

<div className="flex flex-col justify-between w-4/5 ">
    <div className="flex bg-gray-300 px-4 py-2 shadow-sm gap-10 rounded-md font-semibold">
      <p className="w-1/12">Id</p>
      <p className="w-2/12">Nombre</p>
      <p className="w-2/12">Correo</p>
      <p className="w-2/12">Rol</p>
      <p className="w-2/12">Fecha</p>
    </div>

    {users.map((user  ) => (
      <div
        key={user.id_usuario}
        className="flex items-center justify-center gap-10 bg-[#fefefe] rounded-sm px-4 py-2 hover:bg-gray-200 hover:scale-[101%] transition"
      > 
        <p className="w-1/12">{user.id_usuario}</p>
        <p className="w-2/12">{user.nombre_usuario}</p>
        <p className="w-2/12">{user.correo}</p>
        <p className="w-2/12 ml-6">{user.rol}</p>
        <p className="w-2/12">{new Date(user.fecha_creacion).toLocaleDateString()}</p>
        <div className="w-1/12 flex items-center justify-center gap-3">
          <button aria-label="Editar usuario">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="#00ff7b"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
          </button>
          <button aria-label="Eliminar usuario">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="#ff0000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
          </button>
        </div>
      </div>
    ))}
  </div>

  )
}