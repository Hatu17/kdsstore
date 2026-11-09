import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { OptimizedImage } from '../components/OptimizedImage'
import { SpinBadge } from '../components/SpinBadge'
import { pageMeta, site } from '../lib/site'

export const Route = createFileRoute('/about')({
  component: About,
  head: () =>
    pageMeta(
      'About',
      'Khan Design & Services is a one-designer studio for graphic design and AI-assisted content.',
    ),
})

const beliefs = [
  [
    'Context beats taste.',
    'A logo that looks beautiful on a laptop and vanishes on a shop sign has failed. I design for the actual place first.',
  ],
  [
    'Small is the real test.',
    'Thumbnails, avatars and stories are seen at thumb size, so every piece is checked at the smallest size it will appear.',
  ],
  [
    'AI is a tool, not a finish.',
    'Raw AI output looks like raw AI output. I write the prompts, then edit by hand until nobody would guess.',
  ],
  [
    'You talk to the designer.',
    'No account managers or handoffs. The person who reads your brief is the person who designs it.',
  ],
] as const

const graphic = [
  'Logo design',
  'Poster design',
  'Banner design',
  'YouTube thumbnails',
  'Social media posts',
  'Invoice design',
  'Greeting cards & invitations',
  'Business cards',
  'Wedding card invitations',
]
const ai = [
  'Prompt engineering',
  'AI content creation',
  'AI video generation',
  'UGC ads creation',
]
const audience = [
  'Small businesses',
  'YouTubers',
  'Online sellers',
  'Wedding families',
  'Brands running ads',
]

function About() {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <section className="grid items-center gap-14 pt-14 pb-24 md:pt-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow rise mb-6">About the studio</p>
          <h1 className="display rise text-[clamp(3.2rem,8vw,7.5rem)] [animation-delay:80ms]">
            One designer.
            <br />
            <em className="foil font-serif font-normal italic tracking-[-0.02em]">
              Zero
            </em>{' '}
            templates.
          </h1>
          <div className="rise mt-10 max-w-xl space-y-5 text-lg leading-relaxed text-paper/75 [animation-delay:200ms]">
            <p>
              {site.name} is a small, direct studio for graphic design and
              AI-assisted content. It makes logos, posters, thumbnails, wedding
              cards, social posts, AI videos and UGC ads, each one fitted to the
              brand and to the screen, wall or table where it will be seen.
            </p>
            <p>
              The work is for people who need to look established but
              don&rsquo;t have an agency budget: a bakery opening its first
              shop, a creator chasing the next thousand subscribers, a family
              planning a wedding.
            </p>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:col-span-5">
          <div
            className="absolute inset-8 rounded-full bg-gold/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-full ring-1 ring-gold/40">
            <OptimizedImage
              src="/kds-logo.jpg"
              alt="The KDS monogram in gold above the words Khan Design & Services."
              width={640}
              height={640}
              ratio={1}
              sizes="(min-width: 1024px) 28rem, 80vw"
              priority
              quality={85}
              className="aspect-square w-full object-cover"
            />
          </div>
          <SpinBadge
            text="Khan Design · & Services · Est. studio · "
            className="absolute -right-4 -bottom-6"
          />
        </div>
      </section>

      <div className="hairline" />

      <section aria-labelledby="beliefs" className="py-28">
        <p className="eyebrow mb-4">(01) Strong opinions</p>
        <h2
          id="beliefs"
          className="display mb-16 text-[clamp(2.6rem,6vw,5.5rem)]"
        >
          What I{' '}
          <em className="font-serif font-normal italic text-gold">believe</em>.
        </h2>
        <ol className="grid gap-px overflow-hidden rounded-[2rem] border border-line-soft bg-line-soft md:grid-cols-2">
          {beliefs.map(([title, body], i) => (
            <li
              key={title}
              className="group bg-ink p-10 transition-colors duration-500 hover:bg-ink-2 md:p-14"
            >
              <span className="font-mono text-xs text-gold">0{i + 1}</span>
              <h3 className="display mt-4 mb-4 text-3xl md:text-4xl">
                {title}
              </h3>
              <p className="max-w-md leading-relaxed text-paper/65">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="services"
        className="grid gap-16 pb-28 md:grid-cols-12"
      >
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">(02) Services</p>
          <h2 id="services" className="display text-[clamp(2.4rem,5vw,4.5rem)]">
            Thirteen ways{' '}
            <em className="font-serif font-normal italic text-gold">in</em>.
          </h2>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 md:col-span-8">
          {[
            ['Graphic design', graphic],
            ['AI services', ai],
          ].map(([title, list]) => (
            <div key={title as string}>
              <h3 className="mb-6 border-b border-gold/40 pb-3 font-mono text-xs uppercase tracking-[0.2em] text-gold">
                {title as string} · {(list as string[]).length}
              </h3>
              <ul className="space-y-3">
                {(list as string[]).map((s) => (
                  <li
                    key={s}
                    className="display text-2xl tracking-tight text-paper/90"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="for"
        className="rounded-[2rem] border border-line bg-ink-2 p-10 md:p-16"
      >
        <p className="eyebrow mb-4">(03) Made for</p>
        <h2 id="for" className="sr-only">
          Who the studio works with
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {audience.map((a, i) => (
            <li key={a} className="display text-[clamp(2rem,5vw,4rem)]">
              {i % 2 ? (
                <em className="font-serif font-normal italic text-gold">{a}</em>
              ) : (
                a
              )}
              {i < audience.length - 1 && (
                <span className="ml-6 text-gold/50">/</span>
              )}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn-gold mt-12">
          Tell me about yours <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </section>
    </div>
  )
}
