export type GalleryCategory =
  'Identity' | 'Print' | 'Social' | 'Events' | 'AI & Video'

export type GalleryItem = {
  src: string
  title: string
  category: GalleryCategory
  caption: string
  alt: string
  width: number
  height: number
}

export const gallery: GalleryItem[] = [
  {
    src: '/gallery/logo-nuri-bakes.jpg',
    title: 'Nuri Bakes',
    category: 'Identity',
    caption: 'Wordmark and wheat-sprig mark, gold foil on black kraft.',
    alt: 'Black paper shopping bag and cream tissue wrap printed with a gold Nuri Bakes logo on dark slate.',
    width: 1408,
    height: 768,
  },
  {
    src: '/gallery/poster-open-mic.jpg',
    title: 'Open Mic Night',
    category: 'Events',
    caption: 'Condensed type poster that reads from across the street.',
    alt: 'Gold and black Open Mic Night poster pasted on a brick wall in a dim café.',
    width: 1408,
    height: 768,
  },
  {
    src: '/gallery/ugc-ad-still.jpg',
    title: '“Wait for it…”',
    category: 'AI & Video',
    caption:
      'Creator-style skincare ad, hook written for the first two seconds.',
    alt: 'A phone held in hand playing a vertical video ad of a woman holding a skincare bottle with the caption Wait for it.',
    width: 768,
    height: 1376,
  },
  {
    src: '/gallery/wedding-invite.jpg',
    title: 'A & S Wedding Suite',
    category: 'Print',
    caption: 'Emerald and ivory invitation set with ornamental gold borders.',
    alt: 'Flat lay of an emerald and ivory wedding invitation suite with gold borders, monogram and wax seal.',
    width: 1408,
    height: 768,
  },
  {
    src: '/gallery/thumbnail-ai-week.jpg',
    title: 'I Tried AI for 7 Days',
    category: 'Social',
    caption: 'YouTube thumbnail built to win at 160 pixels wide.',
    alt: 'Phone on a desk showing a YouTube thumbnail of a surprised man with large yellow text reading I tried AI for 7 days.',
    width: 1408,
    height: 768,
  },
  {
    src: '/gallery/business-card-rafi.jpg',
    title: 'Rafi Traders',
    category: 'Identity',
    caption: 'Embossed monogram cards, front and back.',
    alt: 'Matte black business cards with an embossed gold RT monogram on dark marble.',
    width: 1408,
    height: 768,
  },
  {
    src: '/gallery/eid-sale-post.jpg',
    title: 'Eid Sale',
    category: 'Social',
    caption: 'Square feed post with crescent, lanterns and a single offer.',
    alt: 'Hand holding a phone showing a midnight blue Eid Sale post with a gold crescent moon and lanterns.',
    width: 1024,
    height: 1024,
  },
  {
    src: '/gallery/brand-banner.jpg',
    title: 'Chai & Co',
    category: 'Print',
    caption: 'Storefront sign and roll-up banner sized for the shop floor.',
    alt: 'Chai and Co storefront at dusk with black and gold signage and a roll-up banner by the door.',
    width: 1408,
    height: 768,
  },
  {
    src: '/gallery/invoice-design.jpg',
    title: 'Aurora Invoice',
    category: 'Print',
    caption: 'An invoice template that looks as considered as the work.',
    alt: 'Printed invoice with a gold header beside a fountain pen and black envelope with gold seal.',
    width: 1408,
    height: 768,
  },
]

export const categories: GalleryCategory[] = [
  'Identity',
  'Print',
  'Social',
  'Events',
  'AI & Video',
]
