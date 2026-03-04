import { useEffect, useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Bowling Green, KY',
    rating: 5,
    text: "Orlando and his team completely transformed our home. The interior painting job was flawless — perfect lines, no mess, finished ahead of schedule. Couldn't recommend them more highly!",
    service: 'Interior Painting',
  },
  {
    name: 'James R.',
    location: 'Bowling Green, KY',
    rating: 5,
    text: 'We hired Orlando for our bathroom tile renovation. The craftsmanship is outstanding. Every tile is perfectly laid and the grout work is immaculate. They treated our home with total respect.',
    service: 'Tile Installation',
  },
  {
    name: 'Diana L.',
    location: 'Warren County, KY',
    rating: 5,
    text: 'From the first call to the final walkthrough, the professionalism was top-notch. Our kitchen remodel looks like something out of a magazine. Worth every penny!',
    service: 'Kitchen Remodel',
  },
  {
    name: 'Mike T.',
    location: 'Bowling Green, KY',
    rating: 5,
    text: "I've used multiple contractors over the years and Orlando's crew is by far the best. On time, clean, and the exterior painting looks amazing even after two Kentucky winters.",
    service: 'Exterior Painting',
  },
  {
    name: 'Amanda K.',
    location: 'Glasgow, KY',
    rating: 5,
    text: 'The decorative finish on our accent wall is absolutely stunning. Orlando brought creative ideas we hadn\'t even thought of. The whole experience was smooth and stress-free.',
    service: 'Decorative Finishes',
  },
  {
    name: 'Robert C.',
    location: 'Bowling Green, KY',
    rating: 5,
    text: 'Our hardwood floors look brand new after refinishing. The team was punctual, courteous, and the quality is exceptional. Will definitely call Orlando for our next project.',
    service: 'Flooring',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)
  const ref = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const go = (dir) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length)
      setAnimating(false)
    }, 300)
    resetInterval()
  }

  const resetInterval = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => go(1), 5000)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => go(1), 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const visibleCount = 3
  const displayed = Array.from(
    { length: visibleCount },
    (_, i) => testimonials[(current + i) % testimonials.length]
  )

  return (
    <section id="testimonials" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red-500 text-xs font-bold uppercase tracking-[4px] mb-4">
            Client Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            WHAT OUR{' '}
            <span className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              CLIENTS
            </span>{' '}
            SAY
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our work speaks through the words of the families and homeowners we've
            served across Bowling Green and Kentucky.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.2s',
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {displayed.map((t, i) => (
            <div
              key={t.name + i}
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateY(10px)' : 'translateY(0)',
                transition: `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${i * 0.05}s`,
              }}
              className={`relative bg-zinc-900 border rounded-2xl p-7 transition-all duration-300 ${
                i === 1
                  ? 'border-red-600/40 shadow-[0_0_30px_rgba(196,30,30,0.15)] md:scale-105'
                  : 'border-white/5'
              }`}
            >
              <Quote
                size={32}
                className="text-red-600/20 mb-4 absolute top-5 right-5"
              />
              <StarRating count={t.rating} />
              <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-400 font-black text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
                <span className="ml-auto text-xs bg-red-600/10 border border-red-600/20 text-red-400 px-2 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.4s',
          }}
          className="flex items-center justify-center gap-6"
        >
          <button
            onClick={() => go(-1)}
            className="w-11 h-11 rounded-full border border-white/10 hover:border-red-600/50 text-white hover:text-red-400 flex items-center justify-center transition-all duration-300 hover:bg-red-600/10"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setAnimating(true)
                  setTimeout(() => { setCurrent(i); setAnimating(false) }, 300)
                  resetInterval()
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-6 h-2 bg-red-500'
                    : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="w-11 h-11 rounded-full border border-white/10 hover:border-red-600/50 text-white hover:text-red-400 flex items-center justify-center transition-all duration-300 hover:bg-red-600/10"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
