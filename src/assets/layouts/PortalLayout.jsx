import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const PortalLayout = () => {
  return (
    <div className="portal-wrapper">
      <Navbar />
      <Header />
      <main>
        <Outlet />
      </main>
      
    </div>
  )
}

export default PortalLayout