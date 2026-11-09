import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-5 md:px-10">
      <p className="eyebrow mb-6">Error 404</p>
      <h1 className="display text-[clamp(4rem,16vw,14rem)]">
        Off the <em className="font-serif font-normal italic foil">grid</em>.
      </h1>
      <p className="mt-8 max-w-md text-lg text-muted">
        This page doesn&rsquo;t exist, or it was moved. The work is still here.
      </p>
      <Link to="/" className="btn-ghost mt-10 self-start">
        Back to the studio
      </Link>
    </section>
  )
}
