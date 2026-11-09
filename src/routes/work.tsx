import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { OptimizedImage } from '../components/OptimizedImage'
import { projectId, projects } from '../lib/projects'
import { pageMeta } from '../lib/site'

export const Route = createFileRoute('/work')({
  component: Work,
  head: () =>
    pageMeta(
      'Work',
      'Case studies in identity, print, social and AI-assisted content from Khan Design & Services.',
    ),
})

function Work() {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <header className="grid gap-8 pt-14 pb-20 md:grid-cols-12 md:pt-20">
        <div className="md:col-span-8">
          <p className="eyebrow rise mb-6">
            Project showcase · {projects.length} case studies
          </p>
          <h1 className="display rise text-[clamp(3.5rem,11vw,10rem)] [animation-delay:80ms]">
            The{' '}
            <em className="foil font-serif font-normal italic tracking-[-0.02em]">
              work
            </em>
            .
          </h1>
        </div>
        <p className="rise self-end text-lg leading-relaxed text-paper/70 [animation-delay:180ms] md:col-span-4">
          Each piece starts with one question:{' '}
          <em className="font-serif text-xl text-gold-hi">
            where will this be seen?
          </em>{' '}
          A phone screen, a shop front and a wedding table each need a different
          design.
        </p>
      </header>

      {projects.length === 0 ? (
        <p className="text-muted">No projects published yet.</p>
      ) : (
        <div className="space-y-32 md:space-y-44">
          {projects.map((p, i) => {
            const flip = i % 2 === 1
            return (
              <article
                key={p._meta.path}
                id={projectId(p._meta.path)}
                aria-labelledby={`${projectId(p._meta.path)}-title`}
                className="grid scroll-mt-28 gap-10 md:grid-cols-12 md:gap-14"
              >
                <div
                  className={`relative md:col-span-7 ${flip ? 'md:order-2' : ''}`}
                >
                  <span
                    aria-hidden="true"
                    className={`display text-outline pointer-events-none absolute -top-14 z-10 text-[8rem] md:-top-20 md:text-[11rem] ${
                      flip ? 'right-2' : 'left-2'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {p.image && (
                    <div className="overflow-hidden rounded-[2rem] ring-1 ring-line">
                      <OptimizedImage
                        src={p.image}
                        alt={p.imageAlt ?? p.title}
                        width={1408}
                        height={1056}
                        ratio={4 / 3}
                        sizes="(min-width: 768px) 56vw, 100vw"
                        priority={i === 0}
                        quality={78}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.03]"
                      />
                    </div>
                  )}
                </div>

                <div
                  className={`flex flex-col justify-center md:col-span-5 ${flip ? 'md:order-1' : ''}`}
                >
                  <p className="eyebrow mb-4">
                    {p.client} — {p.year}
                  </p>
                  <h2
                    id={`${projectId(p._meta.path)}-title`}
                    className="display mb-6 text-5xl md:text-6xl"
                  >
                    {p.title}
                  </h2>
                  <p className="mb-8 font-serif text-2xl leading-snug text-paper/85 italic">
                    {p.description}
                  </p>
                  <ul
                    className="mb-8 flex flex-wrap gap-2"
                    aria-label="Services"
                  >
                    {p.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-gold"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="prose prose-kds prose-invert max-w-none prose-p:text-paper/70 prose-li:text-paper/70 prose-h3:mt-6 prose-h3:mb-2"
                    dangerouslySetInnerHTML={{ __html: p.html }}
                  />
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost mt-8 self-start"
                    >
                      View live <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      )}

      <aside className="mt-36 flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-line p-10 md:flex-row md:items-center md:p-14">
        <div>
          <p className="eyebrow mb-3">A note on these pieces</p>
          <p className="max-w-2xl text-paper/70">
            The case studies above are concept work. The brand names are
            fictional and show how each format is handled. Client projects can
            replace them at any time.
          </p>
        </div>
        <Link to="/contact" className="btn-gold shrink-0">
          Be the next case study
        </Link>
      </aside>
    </div>
  )
}
