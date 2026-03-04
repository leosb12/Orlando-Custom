import { useEffect, useRef, useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Send,
  CheckCircle,
} from 'lucide-react'

const services = [
  'Interior Painting',
  'Exterior Painting',
  'Tile Installation',
  'Custom Remodeling',
  'Decorative Finishes',
  'Flooring',
  'Other',
]

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const inputClass =
    'w-full bg-zinc-900 border border-white/10 focus:border-red-600/60 text-white placeholder-gray-600 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:ring-1 focus:ring-red-600/30 focus:shadow-[0_0_15px_rgba(196,30,30,0.1)]'

  return (
    <section id="contact" className="relative py-28 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 rounded-full bg-red-600/6 blur-3xl pointer-events-none" />

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
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            REQUEST A{' '}
            <span className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              FREE QUOTE
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to transform your space? Reach out today — we'll get back to
            you within 24 hours with a free, no-obligation estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left info panel */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            {[
              {
                icon: Phone,
                label: 'Phone',
                value: '+1(270)202-0459',
                href: 'tel:+12702020459',
                sub: 'Call anytime — we pick up!',
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'orlandoscustom@gmail.com',
                href: 'mailto:orlandoscustom@gmail.com',
                sub: 'We reply within 24 hours',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Bowling Green, Kentucky',
                href: 'https://maps.google.com/?q=Bowling+Green+Kentucky',
                sub: 'Serving all surrounding areas',
              },
            ].map(({ icon: Icon, label, value, href, sub }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex gap-4 p-5 bg-zinc-900 border border-white/5 hover:border-red-600/30 rounded-2xl transition-all duration-300 group hover:shadow-[0_0_20px_rgba(196,30,30,0.1)]"
              >
                <div className="shrink-0 w-12 h-12 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/20 transition-all duration-300">
                  <Icon size={20} className="text-red-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-white font-semibold text-sm group-hover:text-red-300 transition-colors duration-300">
                    {value}
                  </p>
                  <p className="text-gray-600 text-xs mt-0.5">{sub}</p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="p-5 bg-zinc-900 border border-white/5 rounded-2xl">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.facebook.com/orlandoscustompaintingandtile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 bg-blue-600/10 border border-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300">
                    <Facebook size={16} className="text-blue-500" />
                  </div>
                  <span className="text-sm font-medium">Orlando's custom painting & tile</span>
                </a>
                <a
                  href="https://www.instagram.com/orlandoscustompaintingandtile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 bg-pink-600/10 border border-pink-600/20 rounded-xl flex items-center justify-center group-hover:bg-pink-600/20 transition-all duration-300">
                    <Instagram size={16} className="text-pink-500" />
                  </div>
                  <span className="text-sm font-medium">@Orlandoscustompaintingandtile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
            }}
            className="lg:col-span-3 bg-zinc-900 border border-white/5 rounded-3xl p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-20 h-20 bg-green-600/10 border border-green-600/30 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle size={36} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400 max-w-xs">
                  Thank you for reaching out. Orlando will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }) }}
                  className="mt-8 text-red-400 hover:text-red-300 text-sm font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                      Phone Number *
                    </label>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (270) 000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                    Service Needed *
                  </label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-zinc-900">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your project — location, size, timeline, etc."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 disabled:bg-red-900 text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(196,30,30,0.4)] active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message — Get Free Quote
                    </>
                  )}
                </button>

                <p className="text-center text-gray-600 text-xs">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
