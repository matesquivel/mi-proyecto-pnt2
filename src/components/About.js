import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.section
      id="about"
      className={`py-8 px-4 shadow-md rounded-lg mb-8 ${
        theme === 'light'
          ? 'bg-gradient-to-br from-gray-100 via-gray-200 to-white text-gray-800'
          : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="card w-full shadow-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="card-body">
          <motion.h1
            className="text-3xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Acerca de este Proyecto
          </motion.h1>
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Este sitio web fue creado como un proyecto de práctica para aprender y explorar las capacidades de React, Tailwind CSS, y DaisyUI. Utiliza APIs de la NASA para proporcionar datos en tiempo real sobre el clima en Marte, así como una imagen destacada del día.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Objetivo
          </motion.h2>
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            El objetivo de este proyecto es permitir a los usuarios explorar el clima en Marte y acceder a impresionantes imágenes espaciales capturadas por la NASA. A través de esta plataforma, buscamos hacer que la ciencia y el espacio sean accesibles y visualmente atractivos para todos.
          </motion.p>

          <motion.div
            className="badge badge-secondary badge-outline mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Funcionalidades
          </motion.div>
          <ul className="list-disc pl-5 text-lg mb-4">
            {[
              'Visualización del clima actual en Marte, incluyendo temperatura, velocidad del viento y presión atmosférica.',
              'Acceso a la imagen destacada del día proporcionada por la NASA, junto con una breve descripción.',
              'Cambio de tema entre modo claro y oscuro, y otros temas atractivos.',
            ].map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                className="mb-2"
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
