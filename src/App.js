import React from "react";
import { Route } from "react-router-dom";

import './App.css';
import LoginForm from './components/user/login'
import RegisterForm from './components/user/register'
import PotluckForm from './components/dashboard/PotluckForm'
import PotluckCard from './components/dashboard/PotluckCard'
import PotluckDisplay from './components/dashboard/PotluckDisplay'
import Navigation from './components/dashboard/Navigation'

function App() {
  return (
    <div className="App">
       <Navigation/>
       <Route exact path='/login' component={LoginForm}/>
       <Route exact path='/register' component={RegisterForm}/>
       <Route exact path='/dashboard' component={PotluckDisplay}/>
    </div>
  );
}

export default App;
