import React from 'react';
import {Provider} from 'react-redux';
//import {createStore} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/index'

//comment
/* const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
) */
//comment
const store=configureStore({reducer: rootReducer})

  const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <Provider store={store}><React.StrictMode>
    <App />
  </React.StrictMode></Provider>
);  


//ReactDOM.render(<Provider store={store}><React.StrictMode><App /></React.StrictMode></Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
