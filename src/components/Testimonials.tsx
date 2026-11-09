import { Star } from 'lucide-react'
import { ratingSummary, testimonials } from '../lib/testimonials'

export function StarRating({
  value,
  size = 16,
  className = '',
}: {
  value: number
  size?: number
  className?: string
}) {
  return (
    <span
      role="img"
      aria-label={`Rated ${value} out of 5`}
      className={`inline-flex items-center gap-1 ${className}`}
    >
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = Math.max(0, Math.min(1, value - (n - 1)))
        return (
          <span
            key={n}
            aria-hidden="true"
            className="relative inline-block"
            style={{ width: size, height: size }}
          >
            <Star size={size} className="absolute inset-0 text-gold/30" />
            {fill > 0 && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star size={size} className="fill-gold text-gold" />
              </span>
            )}
          </span>
        )
      })}
    </span>
  )
}

export function Testimonials({ eyebrow }: { eyebrow: string }) {
  if (testimonials.length === 0) return null
  const { average, count } = ratingSummary()
  const [featured, ...rest] = testimonials

  return (
    <section
      aria-labelledby="testimonials"
      className="mx-auto max-w-7xl px-5 pt-28 md:px-10"
    >
      <div className="mb-16 grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2
            id="testimonials"
            className="display text-[clamp(2.6rem,6vw,5.5rem)]"
          >
            In their{' '}
            <em className="font-serif font-normal italic text-gold">own</em>{' '}
            words.
          </h2>
        </div>
        <div className="flex items-center gap-6 rounded-[2rem] border border-line bg-ink-2 p-6 lg:col-span-4">
          <span className="display foil text-7xl leading-none">
            {average.toFixed(1)}
          </span>
          <span>
            <StarRating value={average} size={20} />
            <span className="mt-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Average from {count} client {count === 1 ? 'review' : 'reviews'}
            </span>
          </span>
        </div>
      </div>

      <figure className="relative mb-6 overflow-hidden rounded-[2rem] border border-line bg-ink-2 p-8 md:p-14">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 right-6 font-serif text-[16rem] leading-none text-gold/10 md:text-[22rem]"
        >
          &ldquo;
        </span>
        <StarRating value={featured.rating} size={18} />
        <blockquote className="relative mt-6 max-w-4xl font-serif text-[clamp(1.7rem,3.4vw,3rem)] leading-[1.15] italic">
          &ldquo;{featured.quote}&rdquo;
        </blockquote>
        <figcaption className="relative mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="display text-xl">{featured.name}</span>
          <span className="text-paper/60">{featured.role}</span>
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-gold">
            {featured.service}
          </span>
        </figcaption>
      </figure>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((t) => (
          <li key={`${t.name}-${t.service}`}>
            <figure className="flex h-full flex-col rounded-[1.5rem] border border-line-soft bg-ink-2/60 p-7 transition-colors duration-300 hover:border-line">
              <StarRating value={t.rating} />
              <blockquote className="mt-5 flex-1 leading-relaxed text-paper/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line-soft pt-5">
                <span className="display block text-lg">{t.name}</span>
                <span className="block text-sm text-paper/55">{t.role}</span>
                <span className="mt-3 block font-mono text-[0.7rem] uppercase tracking-[0.18em] text-gold">
                  {t.service}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <p className="mt-6 font-mono text-xs text-muted">
        Sample reviews for the concept projects shown on this site.
      </p>
    </section>
  )
}
