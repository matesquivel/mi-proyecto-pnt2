import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

function Button() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
    return (
<button
onClick={toggleDarkMode}
className="relative inline-flex items-center w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-600 focus:outline-none transition-all duration-300"
>
<span className={`absolute w-7 h-7 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${darkMode ? 'translate-x-8' : 'translate-x-1'}`}></span>
<span className="absolute inset-0 flex items-center justify-between px-1">
  <SunIcon className={`w-5 h-5 text-yellow-400 transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
  <MoonIcon className={`w-5 h-5 text-blue-500 transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`} />
</span>
</button> );
}
export default Button;
