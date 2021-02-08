import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

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
        <nav>
          <NavLink to='/'><img src={logo} alt='Company logo' className='nav__logo'/></NavLink>
          <div className="nav-links">
              <NavLink exact to="/dashboard" className='nav__link' style={{ textDecoration: 'none' }}> Planner </NavLink>
              <NavLink exact to="/login" className='nav__link' style={{ textDecoration: 'none' }}> Login </NavLink>
              <NavLink exact to="/register" className='nav__link' style={{ textDecoration: 'none' }}> Register </NavLink>
          </div>
        </nav>
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
