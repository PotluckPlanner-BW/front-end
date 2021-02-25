import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import styled from 'styled-components';
import breakpoint from './breakpoint';

import './App.css';
import LoginForm from './components/user/login';
import RegisterForm from './components/user/register';
import PotluckDisplay from './components/dashboard/PotluckDisplay';
import Landing from './components/LandingPage';
import About from './components/About';

//images
import logo from './images/logo-v-2.svg';

function App() {
  return (
    <div className="App">
      <header>
        <NavigationWrapper>
          <NavLink to='/'><img src={logo} alt='Company logo' className='nav__logo'/></NavLink>
          <div className="nav-links">
              <StyledLink exact to="/dashboard" className='nav__link'>My Planner</StyledLink>
              <StyledLink exact to="/about" className='nav__link'>About</StyledLink>
              <StyledLink exact to="/login" className='nav__link'>Login</StyledLink>
              <StyledLink exact to="/register" className='nav__link'><button>Register</button></StyledLink>
          </div>
        </NavigationWrapper>
      </header>

      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/register' component={RegisterForm}/>
        <Route exact path='/dashboard' component={PotluckDisplay}/>
        <Route exact path='/about' component={About}/>
      </Switch>
       
    </div>
  );
}

//Online Specialist (Jr. Web Developer)

export default App;

const NavigationWrapper = styled.nav`

   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 16px;
   border-bottom: 1px solid #efefef;
   max-width: 1200px;
   margin: 0px auto;
   padding: 20px 20px;

  .nav__logo {
    width: 12rem;
    margin: 8px 0;
  }

  .nav__link a {
    text-decoration: none;
    color: #1c5d76;
    font-weight: bold;
    margin-right: 8px;
  }

  .nav__link a {
    text-decoration: none;
    color: #1c5d76;
    font-weight: bold;
    margin-right: 8px;
  }

  .nav__link a:last-of-type{
    margin-right: 0;
  }


  .nav__link a.active {
    border-bottom: 1px solid #1c5d76;
  }

  button {
    padding: 10px 25px;
    border-radius: 25px;
    border: none;
    background-color: #10282A;
    color: #FFF4E6;
    transition: 0.5s;
  }

  button:hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: #1c4447;
  }
  

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

  @media only screen and ${breakpoint.device.tablet} {
    padding-left: 40px;
  }
`;