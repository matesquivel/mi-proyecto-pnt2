import React from 'react';

function Home() {
  return (
    <section
      id="home"
      className="relative py-8 bg-gray-200 dark:bg-gray-800 shadow-md rounded-lg mb-8"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533577116850-9cc66cad8a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}
    >
      {/* The overlay */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-0"></div>

      {/* Content that should be on top of the overlay */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Bienvenido</h1>
        <p className="text-xl text-gray-200 mb-6">
          Esta es una página de ejemplo usando un poco de Tailwind CSS para los estilos y la funcionalidad de tema claro/oscuro + APIs de la NASA.
        </p>
        <p className="text-lg text-gray-400">
          Explora el clima en Marte y las imágenes del día que la NASA nos trae.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#mars-weather"
            className="inline-block mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Ir a Clima en Marte
          </a>
          <a
            href="#nasa"
            className="inline-block mt-6 bg-purple-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
          >
            Ver Imagen del Día
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
