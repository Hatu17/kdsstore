import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { activeSocials, site } from '../lib/site'

export function SiteFooter() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 md:px-10">
        <p className="eyebrow mb-6">Have something to make?</p>
        <Link
          to="/contact"
          className="group inline-flex items-end gap-4 display text-[clamp(3rem,11vw,9.5rem)]"
        >
          <span>
            Let&rsquo;s{' '}
            <em className="font-serif font-normal italic tracking-normal foil">
              talk
            </em>
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="mb-[0.15em] size-[0.6em] text-gold transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
            strokeWidth={1.25}
          />
        </Link>
        <div className="hairline my-14" />
        <div className="flex flex-col gap-6 font-mono text-xs uppercase tracking-[0.18em] text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getUTCFullYear()} {site.name}
          </p>
          {activeSocials.length > 0 && (
            <ul className="flex flex-wrap gap-6">
              {activeSocials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target={s.id === 'email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold-hi"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p>Graphic design · AI services</p>
        </div>
      </div>
    </footer>
  )
}
