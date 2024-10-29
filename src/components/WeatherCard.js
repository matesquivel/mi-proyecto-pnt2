import React from 'react';

function WeatherCard({ icon, title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105 w-full max-w-xs h-48 flex flex-col justify-between items-center">
      <div className="text-4xl font-semibold mb-2">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center text-base">{value}</p>
    </div>
  );
}

export default WeatherCard;
