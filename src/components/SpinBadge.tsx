export function SpinBadge({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  return (
    <div className={`relative size-36 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="spin-slow size-full">
        <defs>
          <path
            id="badge-circle"
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
          />
        </defs>
        <text className="fill-gold font-mono text-[15px] uppercase tracking-[0.32em]">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center font-serif text-5xl italic text-gold-hi">
        ✶
      </span>
    </div>
  )
}
