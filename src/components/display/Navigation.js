import React  from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

function Navigation() {

   return(
      <NavWrapper>
         <h1>Potluck Planner</h1>
         <div className="nav-links">
            <NavLink exact to="/display"> Planner </NavLink>
            <NavLink exact to="/login"> Login </NavLink>
            <NavLink exact to="/register"> Register </NavLink>
         </div>
      </NavWrapper>
   )
}

export default Navigation;

const NavWrapper = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 16px;
   border-bottom: 1px solid #efefef;
   margin-bottom: 32px;

   h1{
      color: #1c5d76;
   }

   .nav-links{
      display: flex;
      justify-content: space-between;
   
      a{
         text-decoration: none;
         color: #1c5d76;
         font-weight: bold;
         margin-right: 8px;
      }
      a:last-of-type{
         margin-right: 0;
      }
      a.active {
         border-bottom: 1px solid #1c5d76;
       }
   }
`;
