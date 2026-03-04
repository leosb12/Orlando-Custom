import { useEffect, useRef, useState } from 'react'
import { Award, Heart, Zap, Users } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Quality',
    description:
      'We never cut corners. Every project gets our full attention to detail, using only premium materials and proven techniques.',
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description:
      'We respect your time. Our crew shows up on schedule, works diligently, and delivers results without unnecessary delays.',
  },
  {
    icon: Heart,
    title: 'Respect',
    description:
      'Your home is your sanctuary. We treat every property as if it were our own — clean, careful, and professional throughout.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Proudly serving Bowling Green, KY and surrounding areas. We are your neighbors and we invest in this community.',
  },
]

function ValueCard({ value, index }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const Icon = value.icon

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : index % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)',
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
      className="flex gap-5 p-6 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-red-600/20 transition-all duration-300 group"
    >
      <div className="shrink-0 w-12 h-12 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/20 transition-all duration-300">
        <Icon size={22} className="text-red-500" />
      </div>
      <div>
        <h4 className="text-white font-bold text-lg mb-1">{value.title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
      </div>
    </div>
  )
}

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      {/* Red glow left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-red-600/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div
            ref={ref}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <span className="inline-block text-red-500 text-xs font-bold uppercase tracking-[4px] mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              BUILT ON{' '}
              <span className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                TRUST
              </span>
              <br />& CRAFTSMANSHIP
            </h2>
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                Orlando's Custom Painting & Tile is a locally owned and operated business
                serving Bowling Green, Kentucky and the surrounding communities. Founded
                with a passion for transforming spaces, we've built our reputation one
                satisfied customer at a time.
              </p>
              <p>
                Orlando leads a skilled, dedicated crew that takes pride in every
                brushstroke and every tile laid. Whether it's a single room refresh or a
                full home renovation, we bring the same level of workmanship and care to
                every project — big or small.
              </p>
              <p className="text-white font-semibold italic text-lg border-l-4 border-red-600 pl-4">
                "Quality, efficiency and respect." — Orlando
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(196,30,30,0.5)] active:scale-95"
              >
                Work With Us
              </button>
              <a
                href="tel:+12702020459"
                className="border border-white/20 hover:border-red-500 text-white hover:text-red-400 px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Call Orlando
              </a>
            </div>
          </div>

          {/* Right — values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
