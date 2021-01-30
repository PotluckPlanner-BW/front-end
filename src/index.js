import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';

// redux imports
import { potluckReducer } from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

let store = createStore( potluckReducer, applyMiddleware(thunk))


ReactDOM.render(
<Provider store={store}>
   <Router>
      <App />
   </Router>
</Provider>,
  document.getElementById('root')
);


