import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// importamos una función que esta exportada como default
import Greeting from './components/greeting/greeting';

/*
React.StrictMode: Componente de React que se utiliza en el desarrollo
para detectar y advertir sobre posibles problemas en una aplicación.

*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

