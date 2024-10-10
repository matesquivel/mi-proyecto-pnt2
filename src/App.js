import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import NasaApod from './components/NasaApod';
import MarsWeather from './components/MarsWeather';
import { ThemeContext } from './context/ThemeContext';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Users', href: '/users', current: false },
  { name: 'NASA', href: '/nasa', current: false },
  { name: 'Mars Weather', href: '/mars-weather', current: false },
];

export default function App() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    // Añadimos la clase 'dark' a la raíz si el tema oscuro está activado
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen flex flex-col`}>
      {/* Navbar */}
      <Disclosure as="nav" className="bg-white dark:bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Botón menú móvil */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Links del navbar */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      alt="Your Company"
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-900 dark:text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botón de cambio de tema y campana */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    onClick={toggleTheme}
                    className="text-white bg-gray-700 py-2 px-4 rounded hover:bg-gray-600 transition-all"
                  >
                    {isDarkMode ? 'Tema Claro' : 'Tema Oscuro'}
                  </button>

                  <button
                    type="button"
                    className="ml-3 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Contenido principal */}
      <main className="flex-grow bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-8">
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/nasa" element={<NasaApod />} />
            <Route path="/mars-weather" element={<MarsWeather />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 text-center">
        <p>© 2024 Mi Proyecto Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
