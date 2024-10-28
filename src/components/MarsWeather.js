import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { WiThermometer, WiStrongWind, WiBarometer, WiMeteor } from 'react-icons/wi';

function MarsWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [solKeys, setSolKeys] = useState([]);
  const [currentSolIndex, setCurrentSolIndex] = useState(0);

  useEffect(() => {
    const API_KEY = 'vkkGwSJXDi7bzw0FQAZGQvwGTDSO3KWoj01plMkV';
    const URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(URL);
        const sols = response.data.sol_keys;
        setSolKeys(sols);
        setWeatherData(response.data[sols[currentSolIndex]]);
        setLoading(false);
      } catch (err) {
        setError('Error al obtener los datos del clima');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [currentSolIndex]);

  const handleSliderChange = (e) => {
    setCurrentSolIndex(parseInt(e.target.value, 10));
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const { AT, PRE, HWS, WD, Season } = weatherData || {};

  return (
    <section id="mars-weather" className="py-8 bg-base-100 shadow-md rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-base-content">
        Clima en Marte - Sol {solKeys[currentSolIndex]}
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSolIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 text-center"
        >
          <motion.div
            className="bg-base-200 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <WiThermometer className="text-yellow-400 text-6xl mb-2" />
            <h3 className="text-lg font-bold text-base-content">Temperatura</h3>
            <p className="text-base-content">Máxima: {AT?.mx ? `${AT.mx}°C` : '-'}</p>
            <p className="text-base-content">Mínima: {AT?.mn ? `${AT.mn}°C` : '-'}</p>
            <p className="text-base-content">Promedio: {AT?.av ? `${AT.av}°C` : '-'}</p>
          </motion.div>

          <motion.div
            className="bg-base-200 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <WiStrongWind className="text-blue-500 text-6xl mb-2" />
            <h3 className="text-lg font-bold text-base-content">Viento</h3>
            <p className="text-base-content">Velocidad Máx: {HWS?.mx ? `${HWS.mx} m/s` : '-'}</p>
            <p className="text-base-content">Velocidad Promedio: {HWS?.av ? `${HWS.av} m/s` : '-'}</p>
            <p className="text-base-content">Dirección: {WD?.most_common?.compass_point || '-'}</p>
          </motion.div>

          <motion.div
            className="bg-base-200 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <WiBarometer className="text-gray-500 text-6xl mb-2" />
            <h3 className="text-lg font-bold text-base-content">Presión</h3>
            <p className="text-base-content">Máxima: {PRE?.mx ? `${PRE.mx} Pa` : '-'}</p>
            <p className="text-base-content">Promedio: {PRE?.av ? `${PRE.av} Pa` : '-'}</p>
          </motion.div>

          <motion.div
            className="bg-base-200 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <WiMeteor className="text-indigo-500 text-6xl mb-2" />
            <h3 className="text-lg font-bold text-base-content">Estación</h3>
            <p className="text-base-content">{Season || 'Desconocida'}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col items-center mt-6">
        <p className="text-base-content mb-2">
          Sol {solKeys[currentSolIndex]} - Hace {solKeys.length - currentSolIndex - 1} {solKeys.length - currentSolIndex - 1 === 1 ? 'día' : 'días'}
        </p>
        <input
          type="range"
          min="0"
          max={solKeys.length - 1}
          value={currentSolIndex}
          onChange={handleSliderChange}
          className="range range-primary w-full max-w-lg"
        />
      </div>
    </section>
  );
}

export default MarsWeather;
