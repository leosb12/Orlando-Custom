import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FlooringPage from './pages/FlooringPage'
import ExteriorPaintingPage from './pages/ExteriorPaintingPage'
import InteriorPaintingPage from './pages/InteriorPaintingPage'
import TileInstallationPage from './pages/TileInstallationPage'
import RemodelingPage from './pages/RemodelingPage'
import DecorativeFinishesPage from './pages/DecorativeFinishesPage'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      // Wait for the page to render before scrolling
      const timeout = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [location.hash])

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/flooring" element={<FlooringPage />} />
      <Route path="/exteriorpainting" element={<ExteriorPaintingPage />} />
      <Route path="/interiorpainting" element={<InteriorPaintingPage />} />
      <Route path="/tileinstallation" element={<TileInstallationPage />} />
      <Route path="/remodeling" element={<RemodelingPage />} />
      <Route path="/decorativefinishes" element={<DecorativeFinishesPage />} />
    </Routes>
  )
}

export default App
