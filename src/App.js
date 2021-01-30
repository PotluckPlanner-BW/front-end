import React from "react";
import { Route } from "react-router-dom";

import './App.css';
import LoginForm from './components/user/login'
import RegisterForm from './components/user/register'
import PotluckForm from './components/display/PotluckForm'
import PotluckCard from './components/display/PotluckCard'
import PotluckDisplay from './components/display/PotluckDisplay'
import Navigation from './components/display/Navigation'

function App() {
  return (
    <div className="App">
       <Navigation/>
       <Route exact path='/login' component={LoginForm}/>
       <Route exact path='/register' component={RegisterForm}/>
       <Route exact path='/display' component={PotluckDisplay}/>
    </div>
  );
}

export default App;
