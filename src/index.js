import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import './App.css';     // Asegúrate de que App.css esté importado aquí
import { ThemeProvider } from './context/ThemeContext'; // Importamos el contexto del tema

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
