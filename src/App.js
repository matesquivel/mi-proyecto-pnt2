import Navbar from './components/Navbar';
import Home from './components/Home';
import MarsWeather from './components/MarsWeather';
import NasaApod from './components/NasaApod';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Selector de tema con DaisyUI */}
      <div className="flex justify-end space-x-4 p-4">
        <select className="select select-bordered w-full max-w-xs" data-choose-theme>
          <option value="light">Modo Claro</option>
          <option value="dark">Modo Oscuro</option>
        </select>
      </div>

      {/* Contenido principal */}
      <main className="flex-grow p-4">
        <section id="home" className="py-8 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg mb-8">
          <Home />
        </section>

        <section id="mars-weather" className="py-8 bg-gradient-to-r from-blue-300 to-indigo-400 dark:from-gray-700 dark:to-gray-900 shadow-md rounded-lg mb-8">
          <MarsWeather />
        </section>

        <section id="nasa" className="py-8 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg mb-8">
          <NasaApod />
        </section>

        <section id="about" className="py-8 bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg mb-8">
          <About />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
