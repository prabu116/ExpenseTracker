import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css"
import App1 from "./App1"
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"

// import Form from './components/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App1 />
    </BrowserRouter>
    
  </React.StrictMode>
);
// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root1.render(<Form/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
