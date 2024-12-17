import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia 'react-dom' a 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={ <Layout />}/>
        <Route path="/app" element={<App />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
