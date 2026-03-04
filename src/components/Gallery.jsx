import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const galleryItems = [
  {
    src: '/interior painting card.jpg',
    category: 'Interior Painting',
    title: 'Interior Wall Painting',
    link: '/interiorpainting',
  },
  {
    src: '/flooring 2.jpg',
    category: 'Tile Work',
    title: 'Custom Marble Tile Floor',
    link: '/tileinstallation',
  },
  {
    src: '/bathroom tile.jpg',
    category: 'Tile Work',
    title: 'Bathroom Tile Installation',
    link: '/tileinstallation',
  },
  {
    src: '/exterior painting/574589126_1412590157541277_185044966015428104_n.jpg',
    category: 'Exterior',
    title: 'Exterior Home Painting',
    link: '/exteriorpainting',
  },
  {
    src: '/flooring/flooring 800x800.jpg',
    category: 'Flooring',
    title: 'Hardwood Floor Refinish',
    link: '/flooring',
  },
  {
    src: '/cocina 2.jpg',
    category: 'Tile Work',
    title: 'Custom Kitchen Backsplash',
    link: '/tileinstallation',
  },
]

function GalleryCard({ item, index, visible }) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => navigate(item.link)

  return (
    <div
      onClick={handleClick}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-2xl aspect-square bg-zinc-900 cursor-pointer group"
    >
      {!imgError ? (
        <img
          src={item.src}
          alt={item.title}
          onError={() => setImgError(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? 'scale-110' : 'scale-100'
          }`}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-gray-600 text-sm text-center p-4">
          {item.title}
        </div>
      )}

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-400 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="text-red-400 text-xs font-bold uppercase tracking-widest block mb-1">
            {item.category}
          </span>
          <h4 className="text-white font-bold text-base">{item.title}</h4>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-red-600/80 rounded-full flex items-center justify-center backdrop-blur-sm">
              <ArrowRight size={20} className="text-white" />
            </div>
            <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full">
              View More
            </span>
          </div>
        </div>
      </div>

      {/* Category badge */}
      <div className="absolute top-3 left-3">
        <span className="bg-black/60 backdrop-blur-sm border border-white/10 text-white/80 text-xs px-3 py-1 rounded-full">
          {item.category}
        </span>
      </div>
    </div>
  )
}

// Persists across re-mounts (navigation back/forward) — once seen, always visible
let gallerySeen = false

export default function Gallery() {
  const [visible, setVisible] = useState(gallerySeen)
  const ref = useRef(null)

  useEffect(() => {
    if (gallerySeen) return // already seen, skip observer entirely

    const el = ref.current
    if (!el) return

    const activate = () => {
      gallerySeen = true
      setVisible(true)
    }

    const isInView = () => {
      const rect = el.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom > 0
    }

    if (isInView()) { activate(); return }

    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) activate() },
      { threshold: 0.05 }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="relative py-28 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
          className="text-center mb-12"
        >
          <span className="inline-block text-red-500 text-xs font-bold uppercase tracking-[4px] mb-4">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            PROJECT{' '}
            <span className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              GALLERY
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Browse through some of our completed projects. Every space tells a story of
            precision, creativity, and craftsmanship.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.title + i} item={item} index={i} visible={visible} />
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.5s',
          }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 mb-5">Ready to start your own project?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(196,30,30,0.5)] active:scale-95"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

