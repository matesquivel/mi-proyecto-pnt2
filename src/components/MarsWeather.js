import React from 'react';

function MarsWeather() {
  return (
    <section id="mars-weather" className="py-8 bg-gradient-to-r from-blue-300 to-indigo-400 dark:from-gray-700 dark:to-gray-900 shadow-md rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-white dark:text-gray-100">Clima en Marte</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
          <div className="text-4xl font-semibold text-yellow-500 mb-2">🌡️</div>
          <h3 className="text-lg font-bold mb-2 dark:text-gray-100">Temperatura Máxima</h3>
          <p className="text-gray-600 dark:text-gray-300">-30°C</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
          <div className="text-4xl font-semibold text-blue-500 mb-2">💨</div>
          <h3 className="text-lg font-bold mb-2 dark:text-gray-100">Velocidad del Viento</h3>
          <p className="text-gray-600 dark:text-gray-300">5.63 m/s</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
          <div className="text-4xl font-semibold text-gray-500 mb-2">🌬️</div>
          <h3 className="text-lg font-bold mb-2 dark:text-gray-100">Presión Atmosférica</h3>
          <p className="text-gray-600 dark:text-gray-300">743.55 Pa</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
          <div className="text-4xl font-semibold text-indigo-500 mb-2">☁️</div>
          <h3 className="text-lg font-bold mb-2 dark:text-gray-100">Estado del Cielo</h3>
          <p className="text-gray-600 dark:text-gray-300">WNW</p>
        </div>
      </div>
    </section>
  );
}

export default MarsWeather;
