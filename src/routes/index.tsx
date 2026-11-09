import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { OptimizedImage } from '../components/OptimizedImage'
import { SpinBadge } from '../components/SpinBadge'
import { Testimonials } from '../components/Testimonials'
import { gallery } from '../lib/gallery'
import { projectId, projects } from '../lib/projects'
import { pageMeta, site } from '../lib/site'

export const Route = createFileRoute('/')({
  component: Home,
  head: () => pageMeta('Graphic design & AI services', site.description),
})

const services = [
  'Logos',
  'Posters',
  'Banners',
  'YouTube thumbnails',
  'Social posts',
  'Invoices',
  'Greeting cards',
  'Business cards',
  'Wedding invitations',
  'Prompt engineering',
  'AI content',
  'AI video',
  'UGC ads',
]

const steps = [
  [
    'Brief',
    'You tell me what it is, who it is for and where it will live. Send logos, colours and references.',
  ],
  [
    'Concept',
    'A first design arrives quickly, so we react to something real instead of guessing.',
  ],
  [
    'Revise',
    'You say what to change. I refine until it feels right, not just until it is done.',
  ],
  [
    'Deliver',
    'Final files for print, web and social, named and sized for the exact use.',
  ],
] as const

function Home() {
  const hero = gallery[0]
  const heroAlt = gallery[2]
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-10 pb-24 md:px-10 md:pt-16 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="eyebrow rise mb-8 flex items-center gap-3">
            <span className="inline-block size-1.5 rounded-full bg-gold" />
            Graphic design + AI services
          </p>
          <h1 className="display rise text-[clamp(3.6rem,10.5vw,10rem)] [animation-delay:80ms]">
            Make it
            <br />
            <em className="foil foil-animate pr-3 font-serif font-normal italic tracking-[-0.02em]">
              impossible
            </em>
            <br />
            to scroll past.
          </h1>
          <p className="rise mt-10 max-w-xl text-lg leading-relaxed text-paper/75 [animation-delay:200ms] md:text-xl">
            {site.summary}
          </p>
          <div className="rise mt-10 flex flex-wrap gap-4 [animation-delay:280ms]">
            <Link to="/work" className="btn-gold">
              See the work <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Start a project
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:col-span-4 lg:block">
          <div className="rise absolute top-6 right-0 w-[78%] rotate-[4deg] overflow-hidden rounded-[2rem] ring-1 ring-line [animation-delay:350ms]">
            <OptimizedImage
              src={heroAlt.src}
              alt={heroAlt.alt}
              width={heroAlt.width}
              height={heroAlt.height}
              ratio={3 / 4}
              sizes="(min-width: 1024px) 26vw, 0px"
              priority
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="rise absolute bottom-0 left-0 w-[62%] -rotate-[6deg] overflow-hidden rounded-[1.5rem] ring-1 ring-line shadow-2xl shadow-black/60 [animation-delay:450ms]">
            <OptimizedImage
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              ratio={1}
              sizes="(min-width: 1024px) 20vw, 0px"
              priority
              className="aspect-square w-full object-cover"
            />
          </div>
          <SpinBadge
            text="Now booking · Direct with the designer · "
            className="absolute top-[42%] -left-10 z-10"
          />
        </div>
      </section>

      {/* ——— Marquee ——— */}
      <section
        aria-label="Services"
        className="overflow-hidden border-y border-line-soft py-6"
      >
        <div className="marquee" aria-hidden="true">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {services.map((s, i) => (
                <li key={s} className="flex items-center">
                  <span
                    className={`display px-6 text-5xl tracking-tight md:text-7xl ${
                      i % 2 ? 'text-outline' : 'text-paper'
                    }`}
                  >
                    {s}
                  </span>
                  <span className="text-3xl text-gold">✶</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p className="sr-only">{services.join(', ')}</p>
      </section>

      {/* ——— Selected work ——— */}
      <section
        aria-labelledby="selected"
        className="mx-auto max-w-7xl px-5 pt-28 md:px-10"
      >
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">(01) Selected work</p>
            <h2
              id="selected"
              className="display text-[clamp(2.6rem,6vw,5.5rem)]"
            >
              Built for where <br className="hidden md:block" />
              it&rsquo;s{' '}
              <em className="font-serif font-normal italic text-gold">seen</em>.
            </h2>
          </div>
          <Link to="/work" className="btn-ghost">
            All case studies <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <ol className="divide-y divide-line-soft border-y border-line-soft">
          {projects.map((p, i) => (
            <li key={p._meta.path}>
              <Link
                to="/work"
                hash={projectId(p._meta.path)}
                className="group grid items-center gap-6 py-8 md:grid-cols-12 md:py-10"
              >
                <span className="font-mono text-sm text-gold md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="display text-4xl transition-colors duration-300 group-hover:text-gold-hi md:col-span-5 md:text-6xl">
                  {p.title}
                </span>
                <span className="text-paper/60 md:col-span-3">
                  {p.description}
                </span>
                <span className="relative hidden overflow-hidden rounded-xl md:col-span-3 md:block">
                  {p.image && (
                    <OptimizedImage
                      src={p.image}
                      alt=""
                      width={640}
                      height={400}
                      ratio={16 / 10}
                      sizes="22vw"
                      className="aspect-[16/10] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  )}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="absolute top-3 right-3 size-6 rounded-full bg-gold p-1 text-ink opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* ——— Numbers ——— */}
      <section
        aria-label="Studio at a glance"
        className="mx-auto max-w-7xl px-5 pt-28 md:px-10"
      >
        <dl className="grid gap-px overflow-hidden rounded-[2rem] border border-line-soft bg-line-soft sm:grid-cols-3">
          {[
            ['9', 'graphic design services'],
            ['4', 'AI services, finished by hand'],
            ['1', 'designer you talk to directly'],
          ].map(([n, label]) => (
            <div key={label} className="bg-ink p-10">
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="display foil block text-[7rem] leading-none">
                  {n}
                </span>
                <span className="mt-4 block font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ——— Testimonials ——— */}
      <Testimonials eyebrow="(02) Kind words" />

      {/* ——— Gallery teaser ——— */}
      <section
        aria-labelledby="gallery-teaser"
        className="mx-auto max-w-7xl px-5 pt-28 md:px-10"
      >
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">(03) From the gallery</p>
            <h2
              id="gallery-teaser"
              className="display text-[clamp(2.6rem,6vw,5.5rem)]"
            >
              Small sizes,{' '}
              <em className="font-serif font-normal italic text-gold">big</em>{' '}
              reads.
            </h2>
          </div>
          <Link to="/gallery" className="btn-ghost">
            Open the gallery <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[gallery[1], gallery[6], gallery[3], gallery[5]].map((g, i) => (
            <Link
              key={g.src}
              to="/gallery"
              className={`group overflow-hidden rounded-2xl ring-1 ring-line-soft ${
                i % 2 ? 'md:translate-y-12' : ''
              }`}
            >
              <OptimizedImage
                src={g.src}
                alt={g.alt}
                width={g.width}
                height={g.height}
                ratio={4 / 5}
                sizes="(min-width: 768px) 25vw, 50vw"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* ——— Process ——— */}
      <section
        aria-labelledby="process"
        className="mx-auto max-w-7xl px-5 pt-40 md:px-10"
      >
        <p className="eyebrow mb-4">(04) How a project runs</p>
        <h2
          id="process"
          className="display mb-16 max-w-3xl text-[clamp(2.6rem,6vw,5.5rem)]"
        >
          Four steps.{' '}
          <em className="font-serif font-normal italic text-gold">No</em>{' '}
          surprises.
        </h2>
        <ol className="grid gap-10 md:grid-cols-4">
          {steps.map(([title, body], i) => (
            <li key={title} className="border-t border-gold/40 pt-6">
              <span className="font-mono text-xs text-gold">Step {i + 1}</span>
              <h3 className="display mt-3 mb-4 text-3xl">{title}</h3>
              <p className="leading-relaxed text-paper/65">{body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
