import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MarsWeather() {
  const [weatherData, setWeatherData] = useState(null); // Estado para almacenar los datos del clima
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  useEffect(() => {
    const API_KEY = 'vkkGwSJXDi7bzw0FQAZGQvwGTDSO3KWoj01plMkV';
    const URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

    // Función para obtener los datos de la API
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(URL); // Realiza la solicitud a la API
        const latestSol = Object.keys(response.data.sol_keys).pop(); // Obtén el último sol (día marciano)
        const solData = response.data[latestSol]; // Datos del último día

        setWeatherData(solData); // Guarda los datos del último sol
        setLoading(false); // Finaliza la carga
      } catch (err) {
        setError('Error al obtener los datos del clima'); // Maneja errores
        setLoading(false); // Finaliza la carga incluso si hay error
      }
    };

    fetchWeatherData(); // Llama a la función para obtener los datos cuando se monta el componente
  }, []);

  if (loading) {
    return <p>Cargando...</p>; // Muestra un mensaje de carga
  }

  if (error) {
    return <p>{error}</p>; // Muestra un mensaje de error
  }

  // Desestructuramos los datos que vamos a mostrar
  const { AT, HWS, PRE } = weatherData || {}; // AT: Temperatura, HWS: Viento, PRE: Presión

  return (
    <section id="mars-weather" className="py-8 bg-gradient-to-r from-blue-300 to-indigo-400 dark:from-gray-700 dark:to-gray-900 shadow-md rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-white dark:text-gray-100">Clima en Marte</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
          <div className="text-4xl font-semibold text-yellow-400 mb-2">🌡️</div>
          <h3 className="text-lg font-bold dark:text-white">Temperatura Máxima</h3>
          <p className="text-gray-600 dark:text-gray-300">{AT?.mx ? `${AT.mx}°C` : '-'}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
          <div className="text-4xl font-semibold text-blue-500 mb-2">💨</div>
          <h3 className="text-lg font-bold mb-2 dark:text-gray-100">Velocidad del Viento</h3>
          <p className="text-gray-600 dark:text-gray-300">{HWS?.av ? `${HWS.av} m/s` : '-'}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
          <div className="text-4xl font-semibold text-gray-500 mb-2">🌬️</div>
          <h3 className="text-lg font-bold mb-2 dark:text-gray-100">Presión Atmosférica</h3>
          <p className="text-gray-600 dark:text-gray-300">{PRE?.av ? `${PRE.av} Pa` : '-'}</p>
        </div>
      </div>
    </section>
  );
}

export default MarsWeather;
