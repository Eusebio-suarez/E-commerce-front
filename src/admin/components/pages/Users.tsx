import { getUsers } from "../../services/Users"
import { useEffect, useState } from "react"
export const Users = () => {

  const [users,SetUsers] = useState()

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



    </div>
  )
}
