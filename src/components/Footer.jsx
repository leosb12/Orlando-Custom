import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp, Star } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Interior Painting',
  'Exterior Painting',
  'Tile Installation',
  'Custom Remodeling',
  'Decorative Finishes',
  'Flooring Services',
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Red gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <button onClick={scrollToTop} className="block mb-5">
              <Logo className="h-14 w-auto" />
            </button>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Bowling Green's trusted painting & tile experts. We transform homes
              with quality, efficiency, and respect.
            </p>
            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-gray-400 text-xs ml-1">5-Star Service</span>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/orlandoscustompaintingandtile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-zinc-900 border border-white/10 hover:border-blue-500/40 hover:bg-blue-600/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/orlandoscustompaintingandtile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-zinc-900 border border-white/10 hover:border-pink-500/40 hover:bg-pink-600/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-pink-400 transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[2px] text-xs mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-red-600 block" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.href.replace('#', ''))
                      el?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-gray-500 hover:text-red-400 text-sm transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[2px] text-xs mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-red-600 block" />
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-500 hover:text-red-400 text-sm transition-all duration-200 hover:translate-x-1 inline-block text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[2px] text-xs mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-red-600 block" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12702020459"
                  className="flex items-start gap-3 text-gray-500 hover:text-red-400 transition-colors duration-200 group"
                >
                  <Phone size={15} className="text-red-600 mt-0.5 shrink-0" />
                  <span className="text-sm">+1(270)202-0459</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:orlandoscustom@gmail.com"
                  className="flex items-start gap-3 text-gray-500 hover:text-red-400 transition-colors duration-200 group"
                >
                  <Mail size={15} className="text-red-600 mt-0.5 shrink-0" />
                  <span className="text-sm">orlandoscustom@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-500">
                  <MapPin size={15} className="text-red-600 mt-0.5 shrink-0" />
                  <span className="text-sm">
                    Bowling Green, Kentucky<br />
                    <span className="text-gray-600 text-xs">Serving all surrounding areas</span>
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-red-600/8 border border-red-600/15 rounded-xl">
              <p className="text-red-400 text-xs font-bold uppercase tracking-wide mb-1">
                Free Estimates
              </p>
              <p className="text-gray-500 text-xs">
                No obligation. We come to you and assess your project at no cost.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Orlando's Custom Painting & Tile. All rights reserved.
            <span className="block sm:inline sm:ml-2 text-gray-700">
              Bowling Green, Kentucky
            </span>
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-600 hover:text-red-400 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
          >
            Back to Top
            <div className="w-7 h-7 border border-white/10 group-hover:border-red-600/40 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-red-600/10">
              <ArrowUp size={13} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
