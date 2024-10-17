import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import MarsWeather from './components/MarsWeather';
import NasaApod from './components/NasaApod';
import Footer from './components/Footer';

function App() {
  // Inicializamos el estado del tema oscuro basándonos en las preferencias del sistema operativo.
  const [darkMode, setDarkMode] = useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

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
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main className="flex-grow p-4">
        <section id="home" className="py-8 bg-gray-50 dark:bg-gray-900 shadow-md rounded-lg mb-8">
          <Home />
        </section>

        <section id="mars-weather" className="py-8 bg-gradient-to-r from-blue-300 to-indigo-400 dark:from-gray-700 dark:to-gray-900 shadow-md rounded-lg mb-8">
          <MarsWeather />
        </section>

        <section id="nasa" className="py-8 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg mb-8">
          <NasaApod />
        </section>

        <section id="about" className="py-8 bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg mb-8">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
