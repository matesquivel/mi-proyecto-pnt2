import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import Home from './components/Home';
import About from './components/About';
import NasaApod from './components/NasaApod';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

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
    <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      
      {/* Nuevo Header */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#home" className="mr-5 hover:text-gray-900">Home</a>
            <a href="#about" className="mr-5 hover:text-gray-900">About</a>
            <a href="#nasa" className="mr-5 hover:text-gray-900">NASA</a>
            <a href="#mars-weather" className="mr-5 hover:text-gray-900">Mars Weather</a>
          </nav>
          
          {/* Botón para cambiar el tema */}
          <button
            onClick={toggleDarkMode}
            className="relative inline-flex items-center w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-600 focus:outline-none transition-all duration-300"
          >
            <span className={`absolute w-7 h-7 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${darkMode ? 'translate-x-8' : 'translate-x-1'}`}></span>
            <span className="absolute inset-0 flex items-center justify-between px-1">
              <SunIcon className={`w-5 h-5 text-yellow-400 transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
              <MoonIcon className={`w-5 h-5 text-blue-500 transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`} />
            </span>
          </button>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-grow p-4">
        <section id="home" className="py-8 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">Bienvenido</h2>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
            <Home />
          </div>
        </section>

        <section id="mars-weather" className="py-8 bg-gradient-to-r from-blue-300 to-indigo-400 dark:from-gray-700 dark:to-gray-900 shadow-md rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-white dark:text-gray-100">Clima en Marte</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            {/* Tarjeta de Temperatura */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <div className="text-4xl font-semibold text-yellow-500 mb-2">🌡️</div>
              <h3 className="text-lg font-bold mb-2">Temperatura Máxima</h3>
              <p className="text-gray-600 dark:text-gray-300">-30°C</p>
            </div>

            {/* Tarjeta de Viento */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <div className="text-4xl font text-blue-500 mb-2">💨</div>
              <h3 className="text-lg font-bold mb-2">Velocidad del Viento</h3>
              <p className="text-gray-600 dark:text-gray-300">5.63 m/s</p>
            </div>

            {/* Tarjeta de Presión Atmosférica */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <div className="text-4xl font-semibold text-gray-500 mb-2">🌬️</div>
              <h3 className="text-lg font-bold mb-2">Presión Atmosférica</h3>
              <p className="text-gray-600 dark:text-gray-300">743.55 Pa</p>
            </div>

            {/* Tarjeta de Estado del Cielo */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <div className="text-4xl font-semibold text-indigo-500 mb-2">☁️</div>
              <h3 className="text-lg font-bold mb-2">Estado del Cielo</h3>
              <p className="text-gray-600 dark:text-gray-300">WNW</p>
            </div>
          </div>
        </section>

        <section id="nasa" className="py-8 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">NASA APOD</h2>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
            <NasaApod />
          </div>
        </section>

        <section id="about" className="py-8 bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg mb-8">
          <About />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 text-center text-gray-900 dark:text-gray-100 py-4 mt-auto">
        © 2024 Mi Proyecto Web. Todos los derechos reservados.
      </footer>
    </div>
  );
}
