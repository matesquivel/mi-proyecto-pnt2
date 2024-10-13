import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import NasaApod from './components/NasaApod';
import MarsWeather from './components/MarsWeather';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Como se aplica el tema según el estado del modo oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-200 dark:bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between">
          {/* Logo */}
          <img
            className="h-8 w-8"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            alt="Logo"
          />

          {/* Navigation links */}
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-indigo-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-indigo-500">
              About
            </Link>
            <Link to="/users" className="hover:text-indigo-500">
              Users
            </Link>
            <Link to="/nasa" className="hover:text-indigo-500">
              NASA
            </Link>
            <Link to="/mars-weather" className="hover:text-indigo-500">
              Mars Weather
            </Link>
          </div>

          {/* Manejo del boton */}
          <button
            onClick={toggleDarkMode}
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-400 transition-all"
          >
            {darkMode ? 'Tema Claro' : 'Tema Oscuro'}
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/nasa" element={<NasaApod />} />
          <Route path="/mars-weather" element={<MarsWeather />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-center py-4 mt-auto">
        © 2024 Mi Proyecto Web.
      </footer>
    </div>
  );
}
