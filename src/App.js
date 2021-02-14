import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import styled from 'styled-components';
import breakpoint from './breakpoint';

import './App.css';
import LoginForm from './components/user/login'
import RegisterForm from './components/user/register'
import PotluckForm from './components/dashboard/PotluckForm'
import PotluckCard from './components/dashboard/PotluckCard'
import PotluckDisplay from './components/dashboard/PotluckDisplay'
import Navigation from './components/dashboard/Navigation'
import Landing from './components/LandingPage';

//images
import logo from './images/logo-v-2.svg';

function App() {
  return (
    <div className="App">
      <header>
        <NavigationWrapper>
          <NavLink to='/'><img src={logo} alt='Company logo' className='nav__logo'/></NavLink>
          <div className="nav-links">
              <StyledLink exact to="/dashboard" className='nav__link' style={{ textDecoration: 'none' }}> Planner </StyledLink>
              <StyledLink exact to="/login" className='nav__link' style={{ textDecoration: 'none' }}> Login </StyledLink>
              <StyledLink exact to="/register" className='nav__link' style={{ textDecoration: 'none' }}> Register </StyledLink>
          </div>
        </NavigationWrapper>
      </header>

      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/register' component={RegisterForm}/>
        <Route exact path='/dashboard' component={PotluckDisplay}/>
      </Switch>
       
    </div>
  );
}

export default App;

const NavigationWrapper = styled.nav`
   
  padding: 15px 15px;

    @media only screen and ${breakpoint.device.tablet} {
        //background-color: yellow;


    }

    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;
       display: flex;

    }
    
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #10282A;
  padding: 0 5px;
`;