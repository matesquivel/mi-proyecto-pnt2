'use client'

import { motion } from 'framer-motion'

export default function About() {

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section
      id="about"
      className="py-8 px-4 rounded-lg mb-8 bg-base-200 text-base-content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1 className="text-3xl font-bold mb-6" variants={itemVariants}>
          Acerca de este Proyecto
        </motion.h1>
        <motion.p className="text-lg mb-6" variants={itemVariants}>
          Este sitio web fue creado como un proyecto de práctica para aprender y explorar las capacidades de React, Next.js, Tailwind CSS y DaisyUI. Utiliza APIs de la NASA para proporcionar datos en tiempo real sobre el clima en Marte, así como una imagen destacada del día.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold mb-4" variants={itemVariants}>
          Objetivo
        </motion.h2>
        <motion.p className="text-lg mb-6" variants={itemVariants}>
          El objetivo de este proyecto es permitir a los usuarios explorar el clima en Marte y acceder a impresionantes imágenes espaciales capturadas por la NASA. A través de esta plataforma, buscamos hacer que la ciencia y el espacio sean accesibles y visualmente atractivos para todos.
        </motion.p>

        <motion.h3 className="text-xl font-semibold mb-4" variants={itemVariants}>
          Funcionalidades
        </motion.h3>
        <motion.ul className="list-disc pl-5 text-lg space-y-2" variants={containerVariants}>
          {[
            'Visualización del clima actual en Marte, incluyendo temperatura, velocidad del viento y presión atmosférica.',
            'Acceso a la imagen destacada del día proporcionada por la NASA, junto con una breve descripción.',
            'Cambio de tema entre varios estilos atractivos utilizando DaisyUI.',
          ].map((feature, index) => (
            <motion.li key={index} variants={itemVariants}>
              {feature}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  )
}