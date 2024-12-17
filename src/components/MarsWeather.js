import React, { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { WiThermometer, WiStrongWind, WiBarometer, WiMeteor } from 'react-icons/wi';
import { ThemeContext } from '../context/ThemeContext'; 

function MarsWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);
  const [solKeys, setSolKeys] = useState([]); 
  const [currentSolIndex, setCurrentSolIndex] = useState(0); 
  const { theme } = useContext(ThemeContext); 

  const loadingMessages = [
    "Conectando con satélites...",
    "Recibiendo señal desde Marte...",
    "Obteniendo datos atmosféricos...",
    "Procesando información..."
  ];

  // Función para cargar los datos del clima solo al iniciar o al hacer clic en el botón de actualización
  const fetchWeatherData = useCallback(async () => {
    setLoading(true); 
    setError(null); 
    try {
      const API_KEY = 'vkkGwSJXDi7bzw0FQAZGQvwGTDSO3KWoj01plMkV';
      const URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;
      const response = await axios.get(URL);
      const sols = response.data.sol_keys;
      setSolKeys(sols); 
      setWeatherData(response.data); 

      // Añadir un retraso adicional para la animación de carga
      setTimeout(() => {
        setLoading(false);
      }, 3000); 
    } catch (err) {
      setError('Error al obtener los datos del clima');
      setLoading(false);
    }
  }, []);

  // Cargar los datos solo una vez al montar el componente
  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  // Cambiar mensajes de carga
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
      }, 2000); 
      return () => clearInterval(interval);
    }
  }, [loading, loadingMessages.length]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`} 
        >
          {loadingMessages[messageIndex]}
        </motion.div>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.2 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-5xl mb-4"
        >
          🛰️
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
        <button
          onClick={fetchWeatherData}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
        >
          Reintentar
        </button>
      </div>
    );
  }

  const currentSol = solKeys[currentSolIndex];
  const solData = weatherData && weatherData[currentSol];

  return (
    <section
      id="mars-weather"
      className={`py-8 px-4 shadow-md rounded-lg mb-8 ${
        theme === 'light'
          ? 'bg-gradient-to-br from-gray-100 via-gray-200 to-white text-gray-800'
          : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200'
      }`}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        Clima en Marte - Sol {currentSol}
      </h2>

      
      <AnimatePresence mode="wait">
        {solData && (
          <motion.div
            key={currentSolIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-center items-center gap-6 text-center"
          >
            
            <motion.div
              className="bg-base-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-between w-full max-w-xs h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <WiThermometer className="text-yellow-400 text-6xl mb-2" />
              <h3 className="text-lg font-bold text-base-content">Temperatura</h3>
              <p className="text-base-content">Máxima: {solData.AT?.mx ? `${solData.AT.mx}°C` : '-'}</p>
              <p className="text-base-content">Mínima: {solData.AT?.mn ? `${solData.AT.mn}°C` : '-'}</p>
              <p className="text-base-content">Promedio: {solData.AT?.av ? `${solData.AT.av}°C` : '-'}</p>
            </motion.div>

            
            <motion.div
              className="bg-base-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-between w-full max-w-xs h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <WiStrongWind className="text-blue-500 text-6xl mb-2" />
              <h3 className="text-lg font-bold text-base-content">Viento</h3>
              <p className="text-base-content">Velocidad Máx: {solData.HWS?.mx ? `${solData.HWS.mx} m/s` : '-'}</p>
              <p className="text-base-content">Velocidad Promedio: {solData.HWS?.av ? `${solData.HWS.av} m/s` : '-'}</p>
              <p className="text-base-content">Dirección: {solData.WD?.most_common?.compass_point || '-'}</p>
            </motion.div>

            
            <motion.div
              className="bg-base-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-between w-full max-w-xs h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <WiBarometer className="text-gray-500 text-6xl mb-2" />
              <h3 className="text-lg font-bold text-base-content">Presión</h3>
              <p className="text-base-content">Máxima: {solData.PRE?.mx ? `${solData.PRE.mx} Pa` : '-'}</p>
              <p className="text-base-content">Promedio: {solData.PRE?.av ? `${solData.PRE.av} Pa` : '-'}</p>
            </motion.div>

            
            <motion.div
              className="bg-base-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-between w-full max-w-xs h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <WiMeteor className="text-indigo-500 text-6xl mb-2" />
              <h3 className="text-lg font-bold text-base-content">Estación</h3>
              <p className="text-base-content">{solData.Season || 'Desconocida'}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="flex flex-col items-center mt-6">
        <p className="text-base-content mb-2">
          Sol {currentSol} - Hace {solKeys.length - currentSolIndex - 1} {solKeys.length - currentSolIndex - 1 === 1 ? 'día' : 'días'}
        </p>
        <input
          type="range"
          min="0"
          max={solKeys.length - 1}
          value={currentSolIndex}
          onChange={(e) => setCurrentSolIndex(parseInt(e.target.value, 10))}
          className="range range-primary w-full max-w-lg"
        />
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={fetchWeatherData}
          className="btn btn-success text-white rounded"
        >
          Actualizar datos
        </button>
      </div>
    </section>
  );
}

export default MarsWeather;
