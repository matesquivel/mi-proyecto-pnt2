import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MarsWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL de la API de InSight Mars Weather
    const API_KEY = 'vkkGwSJXDi7bzw0FQAZGQvwGTDSO3KWoj01plMkV';  // key
    const URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

    // Hacer la petición a la API
    axios.get(URL)
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Hubo un problema al obtener los datos del clima en Marte.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando datos del clima en Marte...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Los datos meteorológicos más recientes están bajo el objeto "sol_keys"
  const solKeys = weatherData.sol_keys;  // Las claves que identifican cada sol (día marciano)
  const latestSol = solKeys[solKeys.length - 1];  // Último día registrado
  const latestWeather = weatherData[latestSol];  // Datos del clima del último sol

  return (
    <div>
      <h2>Clima en Marte - Sol {latestSol}</h2>
      <p><strong>Temperatura Máxima:</strong> {latestWeather.AT.max}°C</p>
      <p><strong>Temperatura Mínima:</strong> {latestWeather.AT.min}°C</p>
      <p><strong>Presión Atmosférica:</strong> {latestWeather.PRE.av} Pa</p>
      <p><strong>Velocidad del Viento:</strong> {latestWeather.HWS.av} m/s</p>
      <p><strong>Estado del Cielo:</strong> {latestWeather.WD.most_common ? latestWeather.WD.most_common.compass_point : 'Desconocido'}</p>
    </div>
  );
}

export default MarsWeather;
