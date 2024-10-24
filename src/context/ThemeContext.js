import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto del tema
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Estado para manejar el tema. Inicialmente es 'light', pero puedes cambiarlo a cualquier tema de DaisyUI que prefieras
  const [theme, setTheme] = useState('light');

  // Función para cambiar el tema
  const changeTheme = (newTheme) => {
    console.log('Cambiando el tema a:', newTheme); // Verifica que se esté llamando correctamente
    setTheme(newTheme);  // Cambia el tema al nuevo seleccionado
    document.documentElement.setAttribute('data-theme', newTheme);  // Aplica el tema a nivel del DOM usando DaisyUI
  };

  // Efecto que aplica el tema actual cuando se monta el componente
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
