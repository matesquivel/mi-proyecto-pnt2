import React from 'react';

function Home() {
  return (
<section id="home" className="py-8 bg-gray-50 dark:bg-gray-900 shadow-md rounded-lg mb-8">
  <h2 className="text-xl font-bold mb-4 text-center dark:text-gray-100">Bienvenido</h2>
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
    <p className="text-gray-600 dark:text-gray-300">
      Esta es una página de ejemplo usando un poco de Tailwind CSS para los estilos y la funcionalidad de tema claro/oscuro + api de NASA de imagen y clima.
    </p>
  </div>
</section>
  );
}

export default Home;
