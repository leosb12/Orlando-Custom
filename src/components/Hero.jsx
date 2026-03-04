import { useEffect, useRef, useState } from 'react'
import { Star, Shield, Zap, MapPin, Phone } from 'lucide-react'

const words = ['Painting', 'Tile Work', 'Remodeling', 'Transformations']

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [wordVisible, setWordVisible] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordVisible(false)
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length)
        setWordVisible(true)
      }, 350)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 18,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 12,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToServices = () =>
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* BACKGROUND IMAGE with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `scale(1.08) translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <img
          src="/hero.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 z-[1] bg-black/60" />
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[2] bg-gradient-to-t from-black via-black/80 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 z-[2] bg-gradient-to-b from-black/70 to-transparent" />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 55% at ${50 + mousePos.x * 0.4}% ${52 + mousePos.y * 0.3}%, rgba(196,30,30,0.22) 0%, transparent 68%)`,
          transition: 'background 0.15s ease-out',
        }}
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-32 pb-32 flex flex-col items-center text-center">

        {/* Location pill */}
        <div
          className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md border border-red-600/40 rounded-full px-5 py-2 mb-8"
          style={{ animation: 'fadeInDown 0.7s ease forwards' }}
        >
          <MapPin size={13} className="text-red-400" />
          <span className="text-red-300 text-xs font-bold uppercase tracking-[3px]">
            Bowling Green, Kentucky
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="font-black leading-none tracking-tight mb-4 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl"
          style={{ animation: 'fadeInUp 0.7s ease 0.1s both' }}
        >
          <span className="block text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
            ORLANDO&apos;S
          </span>
          <span
            className="block text-red-500"
            style={{ textShadow: '0 0 60px rgba(220,38,38,0.8), 0 0 120px rgba(220,38,38,0.4)' }}
          >
            CUSTOM
          </span>
        </h1>

        {/* Animated service word */}
        <div className="h-16 sm:h-20 flex items-center justify-center mb-6">
          <span
            className="text-3xl sm:text-5xl font-black uppercase tracking-[4px] text-white border-b-[3px] border-red-500 pb-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            style={{
              opacity: wordVisible ? 1 : 0,
              transform: wordVisible ? 'translateY(0)' : 'translateY(14px)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
          >
            {words[currentWord]}
          </span>
        </div>

        {/* Description */}
        <p
          className="text-gray-300 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,1)]"
          style={{ animation: 'fadeIn 1s ease 0.3s both' }}
        >
          Transforming homes and spaces across Bowling Green, KY with premium
          painting, tile installation, and custom remodeling services.
        </p>

        {/* Trust badges */}
        <div
          className="flex items-center justify-center flex-wrap gap-4 mb-10"
          style={{ animation: 'fadeIn 1s ease 0.45s both' }}
        >
          {[
            { icon: Star, label: 'Top Rated' },
            { icon: Shield, label: 'Fully Insured' },
            { icon: Zap, label: 'Fast Results' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-white/80 text-sm font-semibold bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5"
            >
              <Icon size={15} className="text-red-400 shrink-0" />
              {label}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: 'fadeInUp 0.7s ease 0.5s both' }}
        >
          <button
            onClick={scrollToContact}
            className="group relative overflow-hidden bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-black text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(196,30,30,0.8)] active:scale-95 shadow-[0_0_30px_rgba(196,30,30,0.5)]"
          >
            <span className="relative z-10">Get a Free Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <a
            href="tel:+12702020459"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 hover:border-red-500/60 text-white hover:text-red-300 px-10 py-4 rounded-full font-black text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Phone size={16} />
            (270) 202-0459
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        aria-label="Scroll to services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
        style={{ animation: 'fadeIn 1s ease 1s both' }}
      >
        <span className="text-white/40 group-hover:text-red-400 text-[10px] font-bold uppercase tracking-[3px] transition-colors duration-300">
          Scroll
        </span>
        <div className="w-7 h-11 rounded-full border-2 border-white/25 group-hover:border-red-500/70 flex items-start justify-center pt-2 transition-all duration-300">
          <div
            className="w-1.5 h-2.5 rounded-full bg-red-500 group-hover:bg-red-400"
            style={{ animation: 'scrollDot 1.6s ease-in-out infinite' }}
          />
        </div>
      </button>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollDot {
          0%   { transform: translateY(0);    opacity: 1; }
          75%  { transform: translateY(16px); opacity: 0; }
          100% { transform: translateY(0);    opacity: 0; }
        }
      `}</style>
    </section>
  )
}
