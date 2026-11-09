import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { OptimizedImage } from '../components/OptimizedImage'
import { categories, gallery, type GalleryCategory } from '../lib/gallery'
import { pageMeta } from '../lib/site'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
  head: () =>
    pageMeta(
      'Gallery',
      'Logos, posters, thumbnails, wedding cards, social posts and AI ads from Khan Design & Services.',
    ),
})

type Filter = 'All' | GalleryCategory

function Gallery() {
  const [filter, setFilter] = useState<Filter>('All')
  const [open, setOpen] = useState<number | null>(null)
  const items = useMemo(
    () =>
      filter === 'All' ? gallery : gallery.filter((g) => g.category === filter),
    [filter],
  )

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <header className="pt-14 pb-14 md:pt-20">
        <p className="eyebrow rise mb-6">
          Image gallery · {gallery.length} pieces
        </p>
        <h1 className="display rise max-w-5xl text-[clamp(3.5rem,10vw,9rem)] [animation-delay:80ms]">
          Every format,{' '}
          <em className="foil font-serif font-normal italic tracking-[-0.02em]">
            one
          </em>{' '}
          eye.
        </h1>
      </header>

      <div
        role="group"
        aria-label="Filter by category"
        className="sticky top-[76px] z-30 -mx-5 mb-12 flex gap-2 overflow-x-auto bg-ink/80 px-5 py-4 backdrop-blur-xl md:mx-0 md:rounded-full md:border md:border-line-soft md:px-3 md:py-3"
      >
        {(['All', ...categories] as Filter[]).map((c) => {
          const count =
            c === 'All'
              ? gallery.length
              : gallery.filter((g) => g.category === c).length
          const active = filter === c
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(c)}
              className={`shrink-0 rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${
                active ? 'bg-gold text-ink' : 'text-paper/70 hover:text-gold-hi'
              }`}
            >
              {c} <sup className="opacity-60">{count}</sup>
            </button>
          )
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {items.length}{' '}
        {filter === 'All' ? 'pieces' : `${filter} pieces`}
      </p>

      <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
        {items.map((g, i) => (
          <li key={g.src} className="break-inside-avoid">
            <figure className="group relative overflow-hidden rounded-[1.5rem] ring-1 ring-line-soft">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="block w-full cursor-zoom-in text-left"
                aria-label={`Open ${g.title} larger`}
              >
                <OptimizedImage
                  src={g.src}
                  alt={g.alt}
                  width={g.width}
                  height={g.height}
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 92vw"
                  priority={i < 3}
                  className="h-auto w-full transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <Maximize2
                  aria-hidden="true"
                  className="absolute top-4 right-4 size-9 rounded-full bg-ink/60 p-2.5 text-gold-hi opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
                />
              </button>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                <span className="eyebrow">{g.category}</span>
                <span className="display mt-1 block text-2xl">{g.title}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="mt-16 max-w-2xl font-mono text-xs leading-relaxed tracking-wide text-muted">
        All images are resized, cropped and converted to AVIF or WebP on the fly
        by Netlify Image CDN, so each device only downloads the pixels it needs.
        Sample pieces use fictional brand names.
      </p>

      {open !== null && (
        <Lightbox
          items={items}
          index={open}
          onIndex={setOpen}
          onClose={() => setOpen(null)}
        />
      )}
    </div>
  )
}

function Lightbox({
  items,
  index,
  onIndex,
  onClose,
}: {
  items: typeof gallery
  index: number
  onIndex: (i: number) => void
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const item = items[index]
  const go = useCallback(
    (d: number) => onIndex((index + d + items.length) % items.length),
    [index, items.length, onIndex],
  )

  useEffect(() => {
    const dialog = ref.current
    if (dialog && !dialog.open) dialog.showModal()
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  return (
    <dialog
      ref={ref}
      aria-label={`${item.title}, ${index + 1} of ${items.length}`}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink/95 p-0 text-paper backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-5 py-4 md:px-10">
          <p className="font-mono text-xs tracking-[0.2em] text-gold">
            {String(index + 1).padStart(2, '0')} /{' '}
            {String(items.length).padStart(2, '0')}
          </p>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="rounded-full border border-line p-3 transition-colors hover:border-gold hover:text-gold-hi"
            aria-label="Close"
            autoFocus
          >
            <X aria-hidden="true" size={18} />
          </button>
        </div>
        <figure
          className="flex min-h-0 flex-1 flex-col items-center justify-center gap-6 px-5 pb-6 md:px-24"
          onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
        >
          <OptimizedImage
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes="90vw"
            quality={82}
            priority
            className="max-h-[72vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl shadow-black"
          />
          <figcaption className="max-w-2xl text-center">
            <span className="eyebrow">{item.category}</span>
            <span className="display mt-2 block text-3xl md:text-4xl">
              {item.title}
            </span>
            <span className="mt-2 block text-paper/65">{item.caption}</span>
          </figcaption>
        </figure>
        <div className="flex justify-center gap-3 pb-8">
          <button
            type="button"
            onClick={() => go(-1)}
            className="btn-ghost !px-5"
            aria-label="Previous image"
          >
            <ArrowLeft aria-hidden="true" size={16} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="btn-ghost !px-5"
            aria-label="Next image"
          >
            <ArrowRight aria-hidden="true" size={16} />
          </button>
        </div>
      </div>
    </dialog>
  )
}
