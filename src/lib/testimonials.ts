/**
 * Client testimonials shown on the home page.
 *
 * These are sample entries tied to the concept projects on the Work page.
 * Replace them with real client quotes (with permission) before launch.
 * `rating` is a whole number from 1 to 5.
 */
export type Testimonial = {
  quote: string
  name: string
  role: string
  project: string
  service: string
  rating: 1 | 2 | 3 | 4 | 5
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The logo works on a bread bag, a sticker and a tiny profile picture. Customers started recognising our bags on the street within a month.',
    name: 'Nuri A.',
    role: 'Owner, Nuri Bakes',
    project: 'Nuri Bakes',
    service: 'Logo & packaging',
    rating: 5,
  },
  {
    quote:
      'Guests kept the invitations. Three people asked who designed them at the wedding itself. The revisions were quick and nothing was ever too small to fix.',
    name: 'Ayesha & Saad',
    role: 'Couple',
    project: 'A & S Wedding Suite',
    service: 'Wedding cards',
    rating: 5,
  },
  {
    quote:
      'The new banner pulls people in from across the road. Walk-ins are noticeably up on the evenings we put it out.',
    name: 'Bilal R.',
    role: 'Manager, Chai & Co',
    project: 'Chai & Co',
    service: 'Banners & signage',
    rating: 5,
  },
  {
    quote:
      'My click-through rate climbed after switching to these thumbnails. They read clearly even at the smallest size on mobile.',
    name: 'Hamza T.',
    role: 'Tech YouTuber',
    project: 'Creator Launch Kit',
    service: 'YouTube thumbnails',
    rating: 5,
  },
  {
    quote:
      'The AI ad drafts arrived fast, and every frame had been cleaned up by hand. One more round on the hook would have been perfect, but we were happy.',
    name: 'Sana M.',
    role: 'Founder, skincare brand',
    project: 'Creator Launch Kit',
    service: 'UGC ads',
    rating: 4,
  },
  {
    quote:
      'Sent a rough idea on WhatsApp in the morning and had a first concept the same day. Easy to work with from start to finish.',
    name: 'Usman K.',
    role: 'Event organiser',
    project: 'Open Mic Night',
    service: 'Poster design',
    rating: 5,
  },
]

export function ratingSummary(list: Testimonial[] = testimonials) {
  const count = list.length
  const average = count ? list.reduce((sum, t) => sum + t.rating, 0) / count : 0
  return { count, average: Math.round(average * 10) / 10 }
}
