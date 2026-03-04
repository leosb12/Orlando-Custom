import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft, Check, Phone, Shield, Award, Clock, Users,
  ChevronLeft, ChevronRight, X, Star, Paintbrush, Palette, Layers, Sparkles,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const photos = [
  '/hero.png',
]

const steps = [
  {
    number: '01',
    icon: Palette,
    title: 'Color Consultation',
    desc: 'We sit down with you, review your space, and help you choose the perfect colors and finishes. No guesswork — just expert guidance tailored to your home.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Surface Preparation',
    desc: 'We patch holes, sand rough spots, clean walls, and apply primer. Proper prep is what separates a paint job that lasts from one that peels in a year.',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Premium Paints Only',
    desc: 'We source professional-grade interior paints with superior coverage, washability, and true-to-swatch color accuracy. No cutting corners on materials.',
  },
  {
    number: '04',
    icon: Paintbrush,
    title: 'Precision Application',
    desc: 'Clean cut lines on every edge, consistent sheen across every wall, and zero drips on your floors. Our crew treats your home like their own.',
  },
  {
    number: '05',
    icon: Sparkles,
    title: 'Final Walkthrough',
    desc: 'Before we pack up, we walk every room with you and touch up anything that doesn\'t meet our standard. Done means done right.',
  },
]

const guarantees = [
  {
    icon: Shield,
    title: 'Clean & Tidy Work',
    desc: 'We protect your furniture, floors, and trim before we start. When we leave, your home is clean — just with beautiful new walls.',
  },
  {
    icon: Award,
    title: 'True-Color Finishes',
    desc: 'We use professional paints that look exactly like the swatch — not washed out, not off-shade. What you pick is what you get.',
  },
  {
    icon: Users,
    title: 'Same Crew, Every Job',
    desc: 'No subcontractors. The experienced painters who quote your job are the ones who show up and do the work.',
  },
  {
    icon: Clock,
    title: 'Minimal Disruption',
    desc: 'We work around your schedule and finish on time. Most interior jobs are completed with minimal disruption to your daily routine.',
  },
]

function Lightbox({ photos, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={onClose}>
      <button onClick={(e) => { e.stopPropagation(); onClose() }} className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-red-600/70 border border-white/20 rounded-full flex items-center justify-center transition-colors duration-200">
        <X size={18} className="text-white" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev() }} className="absolute left-5 w-11 h-11 bg-white/10 hover:bg-red-600/70 border border-white/20 rounded-full flex items-center justify-center transition-colors duration-200">
        <ChevronLeft size={22} className="text-white" />
      </button>
      <div className="max-w-4xl max-h-[85vh] mx-16" onClick={(e) => e.stopPropagation()}>
        <img src={photos[activeIndex]} alt="Interior painting project" className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl" />
      </div>
      <button onClick={(e) => { e.stopPropagation(); onNext() }} className="absolute right-5 w-11 h-11 bg-white/10 hover:bg-red-600/70 border border-white/20 rounded-full flex items-center justify-center transition-colors duration-200">
        <ChevronRight size={22} className="text-white" />
      </button>
      <div className="absolute bottom-6 flex gap-2">
        {photos.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-colors duration-200 ${i === activeIndex ? 'bg-red-500' : 'bg-white/30'}`} />
        ))}
      </div>
    </div>
  )
}

export default function InteriorPaintingPage() {
  const navigate = useNavigate()
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [visible, setVisible] = useState(false)
  const pageRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => setVisible(true), 60)
  }, [])

  return (
    <div className="bg-black min-h-screen" ref={pageRef}>
      <Navbar />

      {/* ── HEADER ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img src="/hero.png" alt="" aria-hidden="true" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 z-[1] bg-black/72" />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-[2] bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-24 z-[2] bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute top-0 left-0 w-1/2 h-full z-[2] pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 0% 40%, rgba(220,38,38,0.1) 0%, transparent 70%)' }} />

        <button onClick={() => navigate(-1)} className="absolute top-20 left-6 z-10 flex items-center gap-1 text-white/50 hover:text-white/90 text-xs font-medium transition-colors duration-200 group">
          <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back
        </button>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-600/30 rounded-full px-5 py-2 mb-6">
            <Paintbrush size={12} className="text-red-400" />
            <span className="text-red-400 text-xs font-bold uppercase tracking-[3px]">Interior Painting</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-6">
            WALLS THAT{' '}
            <span className="text-red-500" style={{ textShadow: '0 0 40px rgba(220,38,38,0.6)' }}>INSPIRE</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We transform your interiors with flawless finishes, expert color guidance, and
            premium paints that last. Every wall, ceiling, and trim treated with precision.
            Serving Bowling Green, KY.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Top Rated', 'Fully Insured', 'Free Estimates', '500+ Projects'].map((label) => (
              <span key={label} className="flex items-center gap-1.5 text-white/70 text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <Star size={11} className="text-red-400" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Palette, title: 'Expert Color Guidance', desc: 'Not sure what color to pick? We\'ve painted hundreds of homes and know what works. We guide you to a result you\'ll love.' },
              { icon: Paintbrush, title: 'Razor-Sharp Edges', desc: 'Clean cut lines where walls meet ceilings, trim, and doors. The details are what make a professional paint job stand out.' },
              { icon: Sparkles, title: 'Lasting Finish', desc: 'Premium paints applied correctly don\'t just look great on day one — they hold up for years against scuffs, stains, and daily wear.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="group bg-zinc-900/60 border border-white/5 hover:border-red-600/25 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(196,30,30,0.08)]" style={{ opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${0.1 + i * 0.12}s` }}>
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-red-600/10 border border-red-600/20 rounded-xl mb-4 group-hover:bg-red-600/20 transition-colors duration-300">
                    <Icon size={18} className="text-red-400" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-red-300 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-500 text-xs font-bold uppercase tracking-[4px] block mb-3">The Process</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">HOW WE{' '}<span className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">PAINT</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">Every interior job follows the same disciplined process. No shortcuts, no skipped steps.</p>
          </div>
          <div className="relative">
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-red-600/60 via-red-600/20 to-transparent hidden sm:block" />
            <div className="space-y-10">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="flex gap-6 sm:gap-8 items-start" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-20px)', transition: `opacity 0.5s ease ${0.1 + i * 0.1}s, transform 0.5s ease ${0.1 + i * 0.1}s` }}>
                    <div className="shrink-0 w-14 h-14 bg-red-600/10 border border-red-600/30 rounded-full flex items-center justify-center z-10 bg-black">
                      <span className="text-red-500 text-sm font-black">{step.number}</span>
                    </div>
                    <div className="pt-2 pb-8">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={14} className="text-red-500" />
                        <h3 className="text-white font-bold text-lg">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── GUARANTEES ── */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-red-500 text-xs font-bold uppercase tracking-[4px] block mb-3">Our Promise</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">WHAT YOU{' '}<span className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">GET</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">When you hire Orlando&apos;s, you get more than paint — you get a team committed to a result you&apos;re proud of.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {guarantees.map((g, i) => {
              const Icon = g.icon
              return (
                <div key={g.title} className="group bg-zinc-900 border border-white/5 hover:border-red-600/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,30,30,0.1)] hover:-translate-y-0.5" style={{ opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${0.2 + i * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600/10 border border-red-600/20 rounded-xl mb-5 group-hover:bg-red-600/20 transition-colors duration-300">
                    <Icon size={22} className="text-red-500" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-red-300 transition-colors duration-300">{g.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{g.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-10 bg-red-600/10 border border-red-600/25 rounded-2xl p-7 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Check size={18} className="text-red-400" />
              <span className="text-white font-black text-lg uppercase tracking-wider">100% Satisfaction Guarantee</span>
              <Check size={18} className="text-red-400" />
            </div>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">We don&apos;t leave until every wall looks exactly the way you envisioned. Every project gets the same care — no exceptions.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(196,30,30,0.1) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border border-red-600/25 rounded-2xl mb-6">
            <Paintbrush size={28} className="text-red-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">READY FOR FRESH{' '}<span className="text-red-500">WALLS?</span></h2>
          <p className="text-gray-400 mb-8 leading-relaxed">Contact us for a free estimate. We&apos;ll visit your home, walk through every room, and give you a clear, honest quote with no surprises.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200) }} className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-black text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(196,30,30,0.6)] active:scale-95">
              Get a Free Quote
            </button>
            <a href="tel:+12702020459" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-red-500/50 text-white hover:text-red-300 px-10 py-4 rounded-full font-black text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95">
              <Phone size={16} />
              (270) 202-0459
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {lightboxIndex !== null && (
        <Lightbox photos={photos} activeIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onPrev={() => setLightboxIndex((i) => (i - 1 + photos.length) % photos.length)} onNext={() => setLightboxIndex((i) => (i + 1) % photos.length)} />
      )}
    </div>
  )
}
