'use client'

import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { Github, Twitter, Instagram, ExternalLink } from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext'

export default function Footer() {
  const { theme } = useContext(ThemeContext)

  return (
    <footer className={`bg-base-300 text-base-content py-8 ${theme}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Exploración Espacial</h3>
            <ul className="space-y-2">
              <li>
                <Link to="mars-weather" smooth={true} duration={500} className="link link-hover">
                  Clima en Marte
                </Link>
              </li>
              <li>
                <Link to="apod" smooth={true} duration={500} className="link link-hover">
                  Imagen del Día
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="link link-hover">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer" className="link link-hover inline-flex items-center">
                  APIs de la NASA
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li>
                <a href="https://www.nasa.gov/mars" target="_blank" rel="noopener noreferrer" className="link link-hover inline-flex items-center">
                  Exploración de Marte
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li>
                <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" className="link link-hover inline-flex items-center">
                  NASA.gov
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li>
                <a href="https://aulavirtual.instituto.ort.edu.ar" target="_blank" rel="noopener noreferrer" className="link link-hover inline-flex items-center">
                  Aula Virtual ORT
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link link-hover">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link link-hover">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="link link-hover">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-base-content border-opacity-20 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Exploración Espacial. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2">
            Datos proporcionados por la NASA. Este sitio no está afiliado, respaldado ni patrocinado por la NASA.
          </p>
        </div>
      </div>
    </footer>
  )
}