import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft, Check, Phone, Shield, Award, Clock, Users,
  ChevronLeft, ChevronRight, X, Star, Sparkles, Palette, Layers, Eye, Brush,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const steps = [
  {
    number: '01',
    icon: Palette,
    title: 'Design Consultation',
    desc: 'We discuss your vision, the mood you want to create, and the techniques that best suit your space — textures, patterns, colors, and effects.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Surface Preparation',
    desc: 'Decorative finishes demand flawless prep. We patch, sand, prime, and achieve a perfectly smooth or properly textured base before any finish is applied.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Artisan Application',
    desc: 'Our craftsmen apply the chosen technique with precision and consistency — whether it\'s Venetian plaster, faux stone, limewash, or specialty epoxy coatings.',
  },
  {
    number: '04',
    icon: Shield,
    title: 'Sealing & Protection',
    desc: 'Most decorative finishes require proper sealing to maintain their appearance and durability. We use the correct topcoats for each material and environment.',
  },
  {
    number: '05',
    icon: Eye,
    title: 'Final Inspection',
    desc: 'We review every surface with you in different lighting conditions to ensure the finish looks perfect throughout the day.',
  },
]

const guarantees = [
  {
    icon: Sparkles,
    title: 'Artisan Craftsmanship',
    desc: 'Decorative finishes require a different level of skill than standard painting. Our team has the experience and artistry to deliver results that stand out.',
  },
  {
    icon: Award,
    title: 'Premium Materials',
    desc: 'We source professional-grade plasters, specialty paints, and coatings from trusted suppliers — materials that look stunning and last for years.',
  },
  {
    icon: Users,
    title: 'Same Artisans, Every Job',
    desc: 'No subcontractors. The craftsmen who quote your project are the ones who show up to execute it with full ownership of the result.',
  },
  {
    icon: Clock,
    title: 'Precise Execution',
    desc: 'Decorative finishes require patience and attention to detail at every layer. We take the time to do it right — no rushing, no cutting corners.',
  },
]

export default function DecorativeFinishesPage() {
  const navigate = useNavigate()
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
        <div className="absolute inset-0 z-[1] bg-black/78" />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-[2] bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-24 z-[2] bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full z-[2] pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 100% 40%, rgba(220,38,38,0.1) 0%, transparent 70%)' }} />

        <button onClick={() => navigate(-1)} className="absolute top-20 left-6 z-10 flex items-center gap-1 text-white/50 hover:text-white/90 text-xs font-medium transition-colors duration-200 group">
          <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back
        </button>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-600/30 rounded-full px-5 py-2 mb-6">
            <Sparkles size={12} className="text-red-400" />
            <span className="text-red-400 text-xs font-bold uppercase tracking-[3px]">Decorative Finishes</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-6">
            SURFACES THAT{' '}
            <span className="text-red-500" style={{ textShadow: '0 0 40px rgba(220,38,38,0.6)' }}>CAPTIVATE</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Beyond standard paint — we create walls with character. From Venetian plaster and
            limewash to faux finishes, accent walls, and specialty epoxy coatings. Artisan-level
            work for homes that demand something exceptional. Serving Bowling Green, KY.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Top Rated', 'Fully Insured', 'Free Estimates', '500+ Projects'].map((label) => (
              <span key={label} className="flex items-center gap-1.5 text-white/70 text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <Star size={11} className="text-red-400" />{label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNIQUES ── */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-xs uppercase tracking-[4px] font-bold mb-10">What We Offer</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Sparkles, title: 'Venetian Plaster', desc: 'Layered marble-dust plaster burnished to a silk-smooth, luminous finish. Timeless elegance that no flat paint can replicate.' },
              { icon: Palette, title: 'Limewash', desc: 'Old-world texture with natural depth and movement. Each wall comes out uniquely stunning — organic, warm, and modern all at once.' },
              { icon: Layers, title: 'Faux Finishes', desc: 'From faux stone and brick to metallic and concrete effects — we create the look of premium materials at a fraction of the cost.' },
              { icon: Sparkles, title: 'Accent Walls', desc: 'Bold feature walls designed to command attention. Color, texture, pattern — we help you make a statement in any room.' },
              { icon: Shield, title: 'Epoxy Coatings', desc: 'High-gloss, chemical-resistant epoxy for floors, counters, and commercial surfaces. Durable, seamless, and striking.' },
              { icon: Brush || Palette, title: 'Specialty Coatings', desc: 'Metallic paints, crackle finishes, suede effects — if it makes a surface extraordinary, we can apply it with precision.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="group bg-zinc-900/60 border border-white/5 hover:border-red-600/25 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(196,30,30,0.08)]" style={{ opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${0.05 + i * 0.08}s` }}>
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
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">HOW WE{' '}<span className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">CREATE</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">Decorative finishes require precision and patience at every step. Here&apos;s how we deliver results that last.</p>
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
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">When you hire Orlando&apos;s for decorative finishes, you get artisan craftsmanship backed by a real guarantee.</p>
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
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">We don&apos;t leave until every finish looks exactly the way you envisioned it — in every light, from every angle.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(196,30,30,0.1) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border border-red-600/25 rounded-2xl mb-6">
            <Sparkles size={28} className="text-red-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">READY FOR SOMETHING{' '}<span className="text-red-500">EXTRAORDINARY?</span></h2>
          <p className="text-gray-400 mb-8 leading-relaxed">Contact us for a free consultation. We&apos;ll review your space, discuss the techniques that fit your vision, and give you a clear, honest quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200) }} className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-black text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(196,30,30,0.6)] active:scale-95">
              Get a Free Quote
            </button>
            <a href="tel:+12702020459" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-red-500/50 text-white hover:text-red-300 px-10 py-4 rounded-full font-black text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95">
              <Phone size={16} />(270) 202-0459
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
