import React  from "react";
import { NavLink } from "react-router-dom";
import '../../styles/nav.css';

//iamges
import logo from '../../images/logo-v-2.svg'

function Navigation() {

   return(
      <nav>
         <NavLink to='/'><img src={logo} alt='Company logo' className='nav__logo'/></NavLink>
         <div className="nav-links">
            <NavLink exact to="/dashboard" className='nav__link' style={{ textDecoration: 'none' }}> Planner </NavLink>
            <NavLink exact to="/login" className='nav__link' style={{ textDecoration: 'none' }}> Login </NavLink>
            <NavLink exact to="/register" className='nav__link' style={{ textDecoration: 'none' }}> Register </NavLink>
         </div>
      </nav>
   )
}

export default Navigation;

