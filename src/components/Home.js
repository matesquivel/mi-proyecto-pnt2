import React from 'react';

function Home() {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-4">Bienvenido</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Esta es una página de ejemplo usando un poco de  Tailwind CSS para los estilos y la funcionalidad de tema claro/oscuro + api de nasa de imagen y clima.
        </p>
      </div>
    </div>
  );
}

export default Home;
