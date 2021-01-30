import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// redux imports
//import { **addHere** } from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

//let store = createStore( **addHere**, applyMiddleware(thunk))

import './index.css';
import App from './App';

ReactDOM.render(
//<Provider store={store}>
   <Router>
      <App />
   </Router>,
//</Provider>,
  document.getElementById('root')
);


