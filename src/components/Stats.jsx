import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 8, suffix: '+', label: 'Years of Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Happy Families' },
]

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 2000
    const step = (target / duration) * 16
    const interval = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(interval)
  }, [active, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-20 bg-red-600 overflow-hidden">
      {/* Animated diagonal stripes */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(0,0,0,0.3) 20px,
            rgba(0,0,0,0.3) 40px
          )`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-transparent to-red-900/40" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl font-black text-white mb-2 drop-shadow-lg">
                <CountUp target={stat.value} suffix={stat.suffix} active={visible} />
              </div>
              <p className="text-red-100/80 text-sm font-semibold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
