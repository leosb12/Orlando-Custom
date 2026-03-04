import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + href)
      return
    }
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-[0_2px_30px_rgba(196,30,30,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <Logo className="h-12 w-auto drop-shadow-[0_0_8px_rgba(196,30,30,0.6)] group-hover:drop-shadow-[0_0_16px_rgba(196,30,30,0.9)] transition-all duration-300" />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-all duration-300 group ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-red-500'
                    : 'text-white hover:text-red-400'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* CTA Phone */}
          <a
            href="tel:+12702020459"
            className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(196,30,30,0.6)] active:scale-95"
          >
            <Phone size={16} />
            Call Now
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white hover:text-red-400 transition-colors duration-200 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-black/98 backdrop-blur-md border-t border-red-900/30`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`text-left px-4 py-3 text-sm font-semibold uppercase tracking-widest border-b border-white/5 transition-all duration-200 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-red-500 pl-6'
                  : 'text-white hover:text-red-400 hover:pl-6'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+12702020459"
            className="mt-3 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300"
          >
            <Phone size={16} />
            +1(270)202-0459
          </a>
        </div>
      </div>
    </nav>
  )
}
