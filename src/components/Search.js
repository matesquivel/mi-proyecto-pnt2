import React, { useState, useContext } from 'react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../context/ThemeContext';

function Search({ sections }) {
  const { theme } = useContext(ThemeContext);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    if (searchTerm) {
      const filteredResults = sections.filter((section) =>
        section.name.toLowerCase().includes(searchTerm)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleSelect = () => {
    setQuery(''); // Limpia la búsqueda después de seleccionar un resultado
    setResults([]); // Cierra la lista de resultados
  };

  return (
    <div className="relative md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Buscar sección..."
        className={`block w-full p-2 ps-10 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
          theme === 'light'
            ? 'bg-gray-100 text-gray-900 border-gray-300'
            : 'bg-gray-700 text-white border-gray-600'
        }`}
      />

      {results.length > 0 && (
        <div className={`absolute mt-1 rounded-lg shadow-lg w-full z-10 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
          {results.map((result) => (
            <Link
              key={result.id}
              to={result.name}
              smooth={true}
              duration={500}
              onClick={handleSelect}
              className={`block px-4 py-2 hover:bg-${theme === 'light' ? 'gray-200' : 'gray-600'} cursor-pointer`}
            >
              {result.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
