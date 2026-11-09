import { useState, type ImgHTMLAttributes } from 'react'
import { cdn, placeholder, srcSet } from '../lib/image'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  src: string
  alt: string
  width: number
  height: number
  /** Crop to this width/height ratio through the CDN (e.g. 4/5). */
  ratio?: number
  sizes: string
  priority?: boolean
  quality?: number
}

/**
 * Serves every image through Netlify Image CDN: responsive widths, modern
 * formats negotiated per browser (AVIF/WebP), and a blurred placeholder.
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  ratio,
  sizes,
  priority,
  quality = 72,
  className = '',
  style,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false)
  const h = ratio ? Math.round(width / ratio) : height
  return (
    <img
      {...rest}
      src={cdn(src, {
        w: 960,
        h: ratio ? Math.round(960 / ratio) : undefined,
        fit: ratio ? 'cover' : undefined,
        q: quality,
      })}
      srcSet={srcSet(src, ratio, quality)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={h}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      onLoad={() => setLoaded(true)}
      ref={(el) => {
        if (el?.complete && el.naturalWidth) setLoaded(true)
      }}
      className={`bg-ink-3 bg-cover bg-center transition-[filter,opacity] duration-700 ${
        loaded ? 'blur-0' : 'blur-md'
      } ${className}`}
      style={{
        backgroundImage: loaded ? undefined : `url("${placeholder(src)}")`,
        ...style,
      }}
    />
  )
}
