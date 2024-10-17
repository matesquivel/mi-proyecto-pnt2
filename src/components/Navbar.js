import React from 'react';
import { Link } from 'react-scroll';
import DarkModeToggle from './DarkModeToggle'; // Asegúrate de importar correctamente

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>

        {/* Botón para cambiar el tema */}
        <div className="flex md:order-2">
          <DarkModeToggle />
        </div>

        {/* Menú de navegación con react-scroll */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="nasa"
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer"
              >
                NASA
              </Link>
            </li>
            <li>
              <Link
                to="mars-weather"
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer"
              >
                Mars Weather
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
