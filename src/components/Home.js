// Home.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="home"
      className={`relative py-16 shadow-lg rounded-lg mb-12 overflow-hidden ${
        theme === 'light'
          ? 'bg-white bg-opacity-80 text-gray-800'
          : 'bg-gray-800 bg-opacity-60 text-gray-200'
      }`}
    >
      <motion.div
        className="relative z-10 text-center px-6 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-5xl font-extrabold mb-6 text-indigo-400">
          Bienvenido a la Exploración Espacial
        </h1>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Explora el clima en Marte y descubre la imagen del día proporcionada por la NASA.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="mars-weather" smooth={true} duration={500} className="btn bg-blue-600 text-white hover:bg-blue-500 border-none">
            Ir a Clima en Marte
          </Link>
          <Link to="nasa" smooth={true} duration={500} className="btn bg-purple-600 text-white hover:bg-purple-500 border-none">
            Ver Imagen del Día
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
