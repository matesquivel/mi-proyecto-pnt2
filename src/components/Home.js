import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section
      id="home"
      className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-lg rounded-lg mb-12 overflow-hidden text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-60 z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-5xl font-extrabold text-indigo-400 mb-6">
          Bienvenido a la Exploración Espacial
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Explora el clima en Marte y descubre la imagen del día proporcionada por la NASA. La ciencia y el espacio al alcance de todos.
        </p>

        <div className="flex justify-center space-x-4">
          {/* Botón para "Ir a Clima en Marte" */}
          <Link
            to="mars-weather"
            smooth={true}
            duration={500}
            className="btn btn-lg shadow-lg transition-transform transform hover:scale-105 bg-blue-600 text-white hover:bg-blue-500 border-none"
          >
            Ir a Clima en Marte
          </Link>

          {/* Botón para "Ver Imagen del Día" */}
          <Link
            to="nasa"
            smooth={true}
            duration={500}
            className="btn btn-lg shadow-lg transition-transform transform hover:scale-105 bg-purple-600 text-white hover:bg-purple-500 border-none"
          >
            Ver Imagen del Día
          </Link>
        </div>
      </motion.div>

      {/* Interactive animated shapes */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-indigo-700 opacity-40 rounded-full mix-blend-multiply filter blur-2xl animate-blob"
        style={{ animationDuration: '6s' }}
      ></motion.div>
      <motion.div
        className="absolute top-20 right-0 w-40 h-40 bg-blue-900 opacity-40 rounded-full mix-blend-multiply filter blur-2xl animate-blob"
        style={{ animationDuration: '7s' }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 left-20 w-40 h-40 bg-purple-900 opacity-40 rounded-full mix-blend-multiply filter blur-2xl animate-blob"
        style={{ animationDuration: '8s' }}
      ></motion.div>
    </section>
  );
}

export default Home;
