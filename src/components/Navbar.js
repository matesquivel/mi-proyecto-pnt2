import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="bg-base-100 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold">Flowbite</span>
        </a>

        <div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-base-200 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="block py-2 px-4 rounded hover:bg-base-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="nasa"
                smooth={true}
                duration={500}
                className="block py-2 px-4 rounded hover:bg-base-300 cursor-pointer"
              >
                NASA
              </Link>
            </li>
            <li>
              <Link
                to="mars-weather"
                smooth={true}
                duration={500}
                className="block py-2 px-4 rounded hover:bg-base-300 cursor-pointer"
              >
                Mars Weather
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block py-2 px-4 rounded hover:bg-base-300 cursor-pointer"
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
