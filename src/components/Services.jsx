import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Paintbrush,
  Home,
  Layers,
  Hammer,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react'

const services = [
  {
    icon: Paintbrush,
    title: 'Interior Painting',
    description:
      'Transform your interiors with flawless finishes. We handle prep, priming, and perfect paint application on walls, ceilings, trim, and cabinetry.',
    features: ['Color Consultation', 'Surface Preparation', 'Clean & Precise Edges', 'Premium Paints'],
    color: 'from-red-900/30 to-transparent',
    link: '/interiorpainting',
  },
  {
    icon: Home,
    title: 'Exterior Painting',
    description:
      'Boost curb appeal and protect your home with weather-resistant exterior painting. We use top-grade paints built to last Kentucky seasons.',
    features: ['Power Washing', 'Crack & Caulk Repair', 'Long-Lasting Finish', 'Weather-Resistant'],
    color: 'from-red-800/20 to-transparent',
    link: '/exteriorpainting',
  },
  {
    icon: Layers,
    title: 'Tile Installation',
    description:
      'Expert tile work for kitchens, bathrooms, floors, and walls. From classic ceramic to luxury stone — precision laid, perfectly grouted.',
    features: ['Custom Layouts', 'Kitchen & Bath', 'Floor & Wall Tile', 'Grout & Sealing'],
    color: 'from-red-900/30 to-transparent',
    link: '/tileinstallation',
  },
  {
    icon: Hammer,
    title: 'Custom Remodeling',
    description:
      'Full renovation services tailored to your vision. We reimagine spaces from top to bottom — turning your ideas into reality.',
    features: ['Kitchen Remodels', 'Bathroom Renovations', 'Room Makeovers', 'Custom Builds'],
    color: 'from-red-800/20 to-transparent',
    link: '/remodeling',
  },
  {
    icon: Sparkles,
    title: 'Decorative Finishes',
    description:
      'Elevate your space with artisan-level decorative techniques including textured finishes, accent walls, and specialty coatings.',
    features: ['Faux Finishes', 'Accent Walls', 'Venetian Plaster', 'Epoxy Coatings'],
    color: 'from-red-900/30 to-transparent',
    link: '/decorativefinishes',
  },
  {
    icon: Home,
    title: 'Flooring Services',
    description:
      'Complete flooring solutions from hardwood to luxury vinyl and beyond. We install, repair, and refinish all types of flooring.',
    features: ['Hardwood', 'Luxury Vinyl', 'Laminate', 'Refinishing'],
    color: 'from-red-800/20 to-transparent',
    link: '/flooring',
  },
]

function ServiceCard({ service, index }) {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()

  const handleQuote = () => {
    if (service.link) {
      navigate(service.link)
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const Icon = service.icon

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
      className="relative group bg-zinc-900 border border-white/5 hover:border-red-600/40 rounded-2xl p-7 overflow-hidden transition-all duration-400 hover:shadow-[0_0_40px_rgba(196,30,30,0.15)] hover:-translate-y-1 cursor-default"
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
      />

      {/* Icon */}
      <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 bg-red-600/10 border border-red-600/20 rounded-xl mb-5 group-hover:bg-red-600/20 group-hover:border-red-600/40 transition-all duration-300">
        <Icon className="text-red-500 group-hover:text-red-400 transition-colors duration-300" size={26} />
      </div>

      <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Features */}
      <ul className="relative z-10 space-y-2 mb-5">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
            <Check size={14} className="text-red-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={handleQuote}
        className="relative z-10 flex items-center gap-1 text-red-500 hover:text-red-400 text-sm font-semibold uppercase tracking-wider transition-all duration-300 group/btn"
      >
        {service.link ? 'Learn More' : 'Get Quote'}
        <ArrowRight
          size={16}
          className="translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-300"
        />
      </button>
    </div>
  )
}

export default function Services() {
  const [titleVisible, setTitleVisible] = useState(false)
  const titleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTitleVisible(true) },
      { threshold: 0.2 }
    )
    if (titleRef.current) observer.observe(titleRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative py-28 bg-zinc-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-red-600/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={titleRef}
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red-500 text-xs font-bold uppercase tracking-[4px] mb-4">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            OUR{' '}
            <span className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              SERVICES
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From a fresh coat of paint to a complete tile renovation — we deliver
            craftsmanship that lasts, on time and on budget.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
