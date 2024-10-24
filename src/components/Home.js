import React from 'react';
import { Link } from 'react-scroll';

function Home() {
  return (
    <section
      id="home"
      className="relative py-8 bg-base-200 shadow-md rounded-lg mb-8"
      style={{ backgroundImage: 'url(https://st2.depositphotos.com/4164031/7029/i/450/depositphotos_70298385-stock-photo-deep-space.jpg)' }}
    >
      {/* The overlay */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Bienvenido</h1>
        <p className="text-xl text-gray-200 mb-6">
          Esta es una página de ejemplo usando un poco de Tailwind CSS para los estilos y la funcionalidad de tema claro/oscuro + APIs de la NASA.
        </p>
        <div className="flex justify-center space-x-4">
          {/* Botón para "Ir a Clima en Marte" */}
          <Link
  to="mars-weather"
  smooth={true}
  duration={500}
  className="btn bg-blue-500 text-white hover:bg-blue-700"
>
  Ir a Clima en Marte
</Link>

<Link
  to="nasa"
  smooth={true}
  duration={500}
  className="btn bg-pink-500 text-white hover:bg-pink-700"
>
  Ver Imagen del Día
</Link>

        </div>
      </div>
    </section>
  );
}

export default Home;
