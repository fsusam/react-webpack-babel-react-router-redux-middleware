import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Navbar from './components/header/Navbar';
import Routes from "./routes/Routes";
import rootReducer from './reducers';

import 'bootstrap';
import "index.scss";

const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes /> 
      </div>        
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
