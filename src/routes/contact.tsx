import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { activeSocials, pageMeta, socials } from '../lib/site'

export const Route = createFileRoute('/contact')({
  component: Contact,
  head: () =>
    pageMeta(
      'Contact',
      'Start a project with Khan Design & Services on WhatsApp or by sending a short brief.',
    ),
})

function Contact() {
  const whatsapp = socials.find((s) => s.id === 'whatsapp')!
  const others = activeSocials.filter((s) => s.id !== 'whatsapp')
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <header className="pt-14 pb-16 md:pt-20">
        <p className="eyebrow rise mb-6">Contact</p>
        <h1 className="display rise text-[clamp(3.5rem,10vw,9rem)] [animation-delay:80ms]">
          Tell me what
          <br />
          you{' '}
          <em className="foil font-serif font-normal italic tracking-[-0.02em]">
            need
          </em>
          .
        </h1>
      </header>

      <div className="grid gap-14 lg:grid-cols-12">
        <section aria-labelledby="channels" className="lg:col-span-5">
          <h2 id="channels" className="sr-only">
            Ways to reach the studio
          </h2>
          <p className="mb-10 max-w-md text-lg leading-relaxed text-paper/70">
            The fastest way is WhatsApp. The more detail you send — sizes,
            colours, where it will be used — the faster the first design
            arrives.
          </p>

          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-10 block overflow-hidden rounded-[2rem] p-8 text-ink transition-transform duration-500 hover:-translate-y-1"
            style={{
              backgroundImage: 'var(--gold-foil)',
              backgroundSize: '200% 100%',
            }}
          >
            <span className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                Message on WhatsApp
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-8 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.5}
              />
            </span>
            <span className="display mt-10 block text-4xl md:text-5xl">
              {whatsapp.handle}
            </span>
          </a>

          {others.length > 0 && (
            <ul className="divide-y divide-line-soft border-y border-line-soft">
              {others.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target={s.id === 'email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 py-6"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-xs text-gold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="display text-3xl transition-colors group-hover:text-gold-hi">
                        {s.label}
                      </span>
                    </span>
                    <span className="flex items-center gap-3 font-mono text-xs text-muted">
                      {s.handle}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-5 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          <dl className="mt-12 grid grid-cols-2 gap-8 font-mono text-xs uppercase tracking-[0.16em]">
            <div>
              <dt className="mb-2 text-muted">You talk to</dt>
              <dd className="text-paper">The designer, directly</dd>
            </div>
            <div>
              <dt className="mb-2 text-muted">You receive</dt>
              <dd className="text-paper">Print, web &amp; social files</dd>
            </div>
          </dl>
        </section>

        <section aria-label="Send a brief" className="lg:col-span-7">
          <ContactForm />
        </section>
      </div>
    </div>
  )
}
