import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

function About() {
  const { theme } = useContext(ThemeContext); // Obtenemos el tema actual del contexto

  return (
    <motion.div
      className={`py-8 px-6 ${
        theme === 'light' ? 'bg-white text-gray-900' : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-300'
      } shadow-lg rounded-3xl mb-8`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="card w-full shadow-2xl rounded-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 150 }}
      >
        <div className="card-body">
          <motion.h1
            className="text-3xl font-bold mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Sobre el Desarrollador
          </motion.h1>
          <motion.p
            className="text-lg mb-4 leading-relaxed"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Este proyecto está siendo desarrollado por Mat y Rod, dos entusiastas de la tecnología y la ciencia. A través de esta aplicación, se busca explorar las posibilidades de las tecnologías web modernas y compartir el asombro por el espacio.
          </motion.p>

          <div className="badge badge-secondary badge-outline mb-4">Funcionalidades</div>
          <ul className="list-disc pl-5 text-lg mb-4">
            {[
              'Visualización del clima actual en Marte, incluyendo temperatura, velocidad del viento y presión atmosférica.',
              'Acceso a la imagen destacada del día proporcionada por la NASA, junto con una breve descripción.',
              'Cambio de tema entre modo claro y oscuro, y otros temas atractivos.',
            ].map((feature, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.3 } },
                }}
                className="mb-2"
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
