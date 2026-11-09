export const site = {
  name: 'Khan Design & Services',
  short: 'KDS',
  role: 'Graphic design & AI-assisted content studio',
  description:
    'Khan Design & Services designs logos, posters, thumbnails, wedding cards, social posts, AI videos and UGC ads, each built for the exact place it will be seen.',
  summary:
    'One designer, one direct line. Brand marks, print and social work, plus AI content that is guided by prompts and finished by hand.',
}

/**
 * Social and contact links. Leave a value as an empty string to hide it.
 * Each filled-in entry shows on the contact page and in the site footer.
 */
export const socials = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: '+92 309 4728807',
    href: 'https://wa.me/923094728807',
  },
  { id: 'instagram', label: 'Instagram', handle: '', href: '' },
  { id: 'behance', label: 'Behance', handle: '', href: '' },
  { id: 'facebook', label: 'Facebook', handle: '', href: '' },
  { id: 'linkedin', label: 'LinkedIn', handle: '', href: '' },
  { id: 'email', label: 'Email', handle: '', href: '' },
] as const

export const activeSocials = socials.filter((s) => s.href)

export function pageMeta(title: string, description: string) {
  const fullTitle = `${title} | ${site.name}`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
    ],
  }
}
