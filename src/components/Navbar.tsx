import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className="w-full flex justify-center align-center py-8 bg-white fixed z-50">
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>
    </div>
  )
}

export default Navbar
