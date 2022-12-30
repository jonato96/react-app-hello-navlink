import { NavLink } from "react-router-dom";
const Navbar = () =>{
    return(
        <div className="nav-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
    );
}

export default Navbar;