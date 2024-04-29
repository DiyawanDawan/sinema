import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Outlet />
      <ToastContainer />
      <Footer />
    </>
  )
}

export default MainPage