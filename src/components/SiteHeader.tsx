import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { site } from '../lib/site'

const links = [
  { to: '/work', label: 'Work', n: '01' },
  { to: '/gallery', label: 'Gallery', n: '02' },
  { to: '/about', label: 'About', n: '03' },
  { to: '/contact', label: 'Contact', n: '04' },
] as const

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-500 ${
        scrolled
          ? 'border-b border-line-soft bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4 md:px-10">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label={`${site.name}, home`}
        >
          <img
            src="/.netlify/images?url=/kds-logo.jpg&w=88&h=88&fit=cover&q=80"
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-full ring-1 ring-line transition-transform duration-500 group-hover:rotate-[-8deg]"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-[0.95rem] font-bold tracking-tight">
              Khan Design
            </span>
            <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-gold">
              &amp; Services
            </span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="group relative flex items-baseline gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-paper/80 transition-colors hover:text-gold-hi sm:px-4"
                  activeProps={{
                    className: '!text-ink bg-gold',
                    'aria-current': 'page',
                  }}
                >
                  <span className="hidden font-mono text-[0.6rem] opacity-60 md:inline">
                    {link.n}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
