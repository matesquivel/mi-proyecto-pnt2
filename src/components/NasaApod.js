import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext'; // Importamos el contexto de tema

function NasaApod() {
  const { theme } = useContext(ThemeContext); // Obtenemos el tema actual

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = 'vkkGwSJXDi7bzw0FQAZGQvwGTDSO3KWoj01plMkV';
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

    axios
      .get(URL)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error al obtener la imagen del día');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <motion.section
      id="nasa"
      className={`py-8 px-4 shadow-md rounded-lg mb-8 ${
        theme === 'light'
          ? 'bg-gradient-to-br from-gray-100 via-gray-200 to-white text-gray-800'
          : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="card w-full shadow-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <figure className="px-10 pt-10">
          <motion.img
            src={data.url}
            alt={data.title}
            className="rounded-xl shadow-lg max-w-lg w-full object-cover"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </figure>
        <div className="card-body items-center text-center">
          <motion.h2
            className="card-title text-3xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {data.title}
          </motion.h2>
          <motion.p
            className="text-base-content text-justify mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {data.explanation}
          </motion.p>
          <motion.div
            className="card-actions justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ver en alta resolución
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default NasaApod;
