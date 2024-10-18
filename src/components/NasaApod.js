import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NasaApod() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = 'vkkGwSJXDi7bzw0FQAZGQvwGTDSO3KWoj01plMkV';
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

    axios.get(URL)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Hubo un problema al obtener los datos');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 dark:text-gray-400">Cargando...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 dark:text-red-400">{error}</p>;
  }

  return (
    <section id="nasa" className="py-8 bg-gradient-to-r from-blue-300 to-indigo-400 dark:from-gray-700 dark:to-gray-900 shadow-md rounded-lg mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Imagen grande */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={data.url}
            alt={data.title}
            className="w-full object-cover"
          />
        </div>

        {/* Contenedor de texto */}
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{data.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{data.date}</p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {data.explanation}
          </p>
        </div>
      </div>
    </section>
  );
}

export default NasaApod;
