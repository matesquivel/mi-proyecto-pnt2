import React, { createContext, useState } from 'react';

// Crear el contexto del tema
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);  // Estado para manejar el tema
  
  // Función para alternar el tema
  const toggleTheme = () => {
    console.log('Cambiando el tema:', !isDarkMode);  // Verifica que se esté llamando correctamente
    setIsDarkMode((prevMode) => !prevMode);  // Cambia el tema entre oscuro/claro
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
