import React, { createContext, useState, useEffect } from 'react';


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState('light');

  // Función para cambiar el tema
  const changeTheme = (newTheme) => {
    setTheme(newTheme);  
    document.documentElement.setAttribute('data-theme', newTheme);  
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
