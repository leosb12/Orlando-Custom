// Logo uses the favicon image generated from the brand logo (in /public)
export default function Logo({ className = 'h-14 w-auto' }) {
  return (
    <img
      src="/android-chrome-512x512.png"
      alt="Orlando's Custom Painting & Tile"
      className={className}
    />
  )
}
