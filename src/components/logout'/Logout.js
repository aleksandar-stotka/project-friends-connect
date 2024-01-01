import React from 'react'
import { useLogout } from '../../hooks/useLogout'
export default function Logout() {
   const {user} = useLogout()
  return (
    <div>Logout</div>
  )
}
