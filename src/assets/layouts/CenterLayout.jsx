import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const CenterLayout = () => {
  return (
    <div className="center-wrapper">
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default CenterLayout