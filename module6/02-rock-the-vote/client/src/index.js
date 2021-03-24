import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './fonts/Histeria Script Demo.ttf'
import './index.css';
import App from './App';
import UserProvider from './context/UserProvider.js'
import ControversyProvider from './context/ControversyProvider';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ControversyProvider>
        <App />
      </ControversyProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
