import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Home from './components/home';
import reportWebVitals from './reportWebVitals';
//import Registration from './components/registrationform';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('foot')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
