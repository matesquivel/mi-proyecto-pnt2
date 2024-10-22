import Navbar from './components/Navbar';
import Home from './components/Home';
import MarsWeather from './components/MarsWeather';
import NasaApod from './components/NasaApod';
import About from './components/About';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');  // El tema por defecto es "light"

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);  // Cambia el tema automáticamente
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Selector de tema */}
      <div className="flex justify-end p-4">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleThemeChange}
          value={theme}
        >
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
          <option value="corporate">Corporativo</option>
          <option value="synthwave">Synthwave</option>
          <option value="retro">Retro</option>
        </select>
      </div>

      {/* Contenido principal */}
      <main className="flex-grow p-4">
        <section id="home" className="py-8 bg-base-200 shadow-md rounded-lg mb-8">
          <Home />
        </section>

        <section id="mars-weather" className="py-8 bg-base-100 shadow-md rounded-lg mb-8">
          <MarsWeather />
        </section>

        <section id="nasa" className="py-8 bg-base-200 shadow-md rounded-lg mb-8">
          <NasaApod />
        </section>

        <section id="about" className="py-8 bg-base-100 shadow-md rounded-lg mb-8">
          <About />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
