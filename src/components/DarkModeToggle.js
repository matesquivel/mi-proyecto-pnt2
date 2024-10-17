import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <label className="swap swap-rotate">
      {/* Checkbox oculto que controla el estado del tema */}
      <input 
        type="checkbox" 
        className="hidden"  // Oculta el checkbox 
        onClick={toggleDarkMode} 
      />

      {/* Icono de sol (cuando está en modo claro) */}
      <SunIcon className="swap-off h-10 w-10 fill-current text-yellow-400" />

      {/* Icono de luna (cuando está en modo oscuro) */}
      <MoonIcon className="swap-on h-10 w-10 fill-current text-blue-500" />
    </label>
  );
}
