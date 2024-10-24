import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MarsWeather from './components/MarsWeather';
import NasaApod from './components/NasaApod';
import About from './components/About';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';  // Asegúrate de importar el ThemeProvider

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

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
    </ThemeProvider>
  );
}

export default App;
