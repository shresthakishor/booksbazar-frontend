import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../common/Navbar'

const PublicLayout = () => {
  return (
  <>
        <div>
          <Navbar/>
        </div>
        <Outlet/>
  </>
  )
}

export default PublicLayout