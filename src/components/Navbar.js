import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-scroll';
import Search from './Search';

function Navbar() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [query, setQuery] = useState('');
  const sections = [
    { id: '1', name: 'home', label: 'Inicio' },
    { id: '2', name: 'nasa', label: 'NASA' },
    { id: '3', name: 'mars-weather', label: 'Clima en Marte' },
    { id: '4', name: 'about', label: 'Acerca de' },
  ];

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
  };

  return (
    <nav className="bg-base-100 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        
        {/* Nombre estilizado */}
        <a href="#home" className="flex items-center space-x-3">
          <span className="text-4xl font-bold tracking-wider leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out pb-1">
            Techce
          </span>
        </a>

        {/* Menú centrado */}
        <ul className="flex flex-grow justify-center space-x-8 font-medium">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={section.name}
                smooth={true}
                duration={500}
                className="py-2 px-4 rounded hover:bg-base-300 cursor-pointer"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Componente Search */}
        <div className="relative hidden md:block mr-4">
          <Search sections={sections} query={query} setQuery={setQuery} />
        </div>

        {/* Swap de tema (Sol/Luna) */}
        <label className="swap swap-rotate">
          <input type="checkbox" onClick={toggleTheme} />
          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* Ícono del sol */}
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* Ícono de la luna */}
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
