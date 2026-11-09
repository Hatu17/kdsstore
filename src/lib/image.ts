type Transform = {
  w?: number
  h?: number
  fit?: 'contain' | 'cover' | 'fill'
  q?: number
  fm?: 'avif' | 'webp' | 'jpg' | 'png'
}

/** Builds a Netlify Image CDN URL for a local or allowlisted remote image. */
export function cdn(src: string, t: Transform = {}) {
  const params = new URLSearchParams({ url: src })
  for (const [key, value] of Object.entries(t))
    if (value !== undefined) params.set(key, String(value))
  return `/.netlify/images?${params.toString()}`
}

export const WIDTHS = [400, 640, 960, 1280, 1600] as const

export function srcSet(src: string, ratio?: number, q = 72) {
  return WIDTHS.map((w) => {
    const h = ratio ? Math.round(w / ratio) : undefined
    return `${cdn(src, { w, h, fit: ratio ? 'cover' : undefined, q })} ${w}w`
  }).join(', ')
}

/** A tiny, heavily compressed copy used as a blurred placeholder. */
export function placeholder(src: string) {
  return cdn(src, { w: 32, q: 30 })
}
