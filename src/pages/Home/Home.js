import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useAuthContext } from '../../hooks/useAuthContext'
import Sidebar from '../../components/sidebar/Sidebar'
import Dashboard from '../dashboard/Dashboard'
export default function Home() {

    const {user} = useAuthContext()

  return (
    <div>
      <div className=''>
      <Navbar/>
      
     
      </div>
      <div>
      {user && <Sidebar/>}
        
      </div>
     
    </div>
  )
}
