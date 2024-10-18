import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MarsWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = 'vkkGwSJXDi7bzw0FQAZGQvwGTDSO3KWoj01plMkV';  // key
    const URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(URL);
        const latestSol = response.data.sol_keys.pop();
        const solData = response.data[latestSol];

        setWeatherData(solData);
        setLoading(false);
      } catch (err) {
        setError('Error al obtener los datos del clima');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const { AT, PRE, HWS, WD, Season } = weatherData;

  return (
    <section id="mars-weather" className="py-8 bg-gradient-to-r from-blue-300 to-indigo-400 dark:from-gray-700 dark:to-gray-900 shadow-md rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-white dark:text-gray-100">Clima en Marte</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="text-4xl font-semibold text-yellow-400 mb-2">🌡️</div>
          <h3 className="text-lg font-bold dark:text-white">Temperatura</h3>
          <p className="text-gray-600 dark:text-gray-300">Máxima: {AT?.mx ? `${AT.mx}°C` : '-'}</p>
          <p className="text-gray-600 dark:text-gray-300">Mínima: {AT?.mn ? `${AT.mn}°C` : '-'}</p>
          <p className="text-gray-600 dark:text-gray-300">Promedio: {AT?.av ? `${AT.av}°C` : '-'}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="text-4xl font-semibold text-blue-500 mb-2">💨</div>
          <h3 className="text-lg font-bold dark:text-white">Viento</h3>
          <p className="text-gray-600 dark:text-gray-300">Velocidad Máx: {HWS?.mx ? `${HWS.mx} m/s` : '-'}</p>
          <p className="text-gray-600 dark:text-gray-300">Velocidad Promedio: {HWS?.av ? `${HWS.av} m/s` : '-'}</p>
          <p className="text-gray-600 dark:text-gray-300">Dirección del Viento: {WD?.most_common?.compass_point || '-'}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="text-4xl font-semibold text-gray-500 mb-2">🌬️</div>
          <h3 className="text-lg font-bold dark:text-white">Presión Atmosférica</h3>
          <p className="text-gray-600 dark:text-gray-300">Máxima: {PRE?.mx ? `${PRE.mx} Pa` : '-'}</p>
          <p className="text-gray-600 dark:text-gray-300">Promedio: {PRE?.av ? `${PRE.av} Pa` : '-'}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="text-4xl font-semibold text-indigo-500 mb-2">🗓️</div>
          <h3 className="text-lg font-bold dark:text-white">Estación</h3>
          <p className="text-gray-600 dark:text-gray-300">{Season || 'Desconocida'}</p>
        </div>
      </div>
    </section>
  );
}

export default MarsWeather;
