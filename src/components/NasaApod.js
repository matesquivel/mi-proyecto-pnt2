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
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">{data.title}</h1>
      <p>{data.date}</p>
      <img src={data.url} alt={data.title} style={{ maxWidth: '100%' }} />
      <p>{data.explanation}</p>
    </div>
  );
}

export default NasaApod;
