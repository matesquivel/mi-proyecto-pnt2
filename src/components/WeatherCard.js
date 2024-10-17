import React from 'react';

function WeatherCard({ icon, title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
      <div className="text-4xl font-semibold mb-2">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{value}</p>
    </div>
  );
}

export default WeatherCard;
