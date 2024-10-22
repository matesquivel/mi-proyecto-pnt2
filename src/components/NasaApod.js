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
    <section id="nasa" className="py-8 bg-base-100 shadow-md rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-base-content">Imagen del Día de la NASA</h2>
      <div className="flex flex-col items-center justify-center">
        {/* Imagen con ancho máximo */}
        <img
          src={data.url}
          alt={data.title}
          className="w-full max-w-lg object-cover rounded-lg shadow-lg mb-4"
        />
        {/* Texto descriptivo */}
        <h3 className="text-xl font-semibold text-base-content">{data.title}</h3>
        <p className="text-base-content">{data.explanation}</p>
      </div>
    </section>
  );
}

export default NasaApod;
