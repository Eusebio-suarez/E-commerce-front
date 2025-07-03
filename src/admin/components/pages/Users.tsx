import { getUsers } from "../../services/Users"
import { useEffect, useState } from "react"
import type { user } from "../../../types/users"
export const Users = () => {

  const [users,SetUsers] = useState<user[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers()
      console.log(users)
      SetUsers(users)
    }
    fetchUsers()
  }, [])

  return (
    <div>
         {
          users.map((user)=>(
            <p>{user.nombre_usuario}</p>
          ))
        }
    </div>
  )
}
