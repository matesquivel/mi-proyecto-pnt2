import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 },
    }),
  };

  return (
    <motion.div
      className="py-8 px-6 bg-base-200 shadow-md rounded-lg mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="card w-full bg-base-100 shadow-xl"
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="card-body">
          <motion.h1
            className="text-3xl font-bold mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Acerca de este Proyecto
          </motion.h1>
          <motion.p
            className="text-lg mb-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Este sitio web fue creado como un proyecto de práctica para aprender y explorar las capacidades de React, Tailwind CSS, y DaisyUI. Utiliza APIs de la NASA para proporcionar datos en tiempo real sobre el clima en Marte, así como una imagen destacada del día.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold mb-2"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Objetivo
          </motion.h2>
          <motion.p
            className="text-lg mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            El objetivo de este proyecto es permitir a los usuarios explorar el clima en Marte y acceder a impresionantes imágenes espaciales capturadas por la NASA. A través de esta plataforma, buscamos hacer que la ciencia y el espacio sean accesibles y visualmente atractivos para todos.
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
                variants={listVariants}
                className="mb-2"
              >
                {feature}
              </motion.li>
            ))}
          </ul>

          <motion.h2
            className="text-2xl font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Sobre el Desarrollador
          </motion.h2>
          <motion.div
            className="flex items-center mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="avatar mr-4">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <motion.img
                  src="https://api.dicebear.com/9.x/bottts/svg"
                  alt="developer avatar"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                />
              </div>
            </div>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Este proyecto está siendo desarrollado por Mat y Rod, dos entusiastas de la tecnología y la ciencia. A través de esta aplicación, se busca explorar las posibilidades de las tecnologías web modernas y compartir el asombro por el espacio.
            </motion.p>
          </motion.div>

          <motion.div
            className="card-actions justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <p className="text-lg italic">"Si querés saber más, ¡no dudes en preguntar!"</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
