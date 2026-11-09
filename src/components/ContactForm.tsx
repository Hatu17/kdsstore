import { useRef, useState, type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'

const SERVICES = [
  'Logo design',
  'Poster design',
  'Banner design',
  'YouTube thumbnail',
  'Social media posts',
  'Invoice design',
  'Greeting card or invitation',
  'Business cards',
  'Wedding card invitation',
  'Prompt engineering',
  'AI content creation',
  'AI video generation',
  'UGC ads creation',
  'Something else',
]

export function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'error' | 'success'
  >('idle')
  const submitting = useRef(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current || status === 'success') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) =>
      body.append(key, String(value)),
    )
    submitting.current = true
    setStatus('pending')
    try {
      const response = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('Message was not accepted')
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      submitting.current = false
    }
  }

  return (
    <div className="rounded-[2rem] border border-line bg-ink-2 p-8 md:p-12">
      {status === 'success' ? (
        <div className="py-10 text-center">
          <Mail
            aria-hidden="true"
            className="mx-auto mb-6 size-10 text-gold"
            strokeWidth={1.25}
          />
          <h2 className="display mb-3 text-4xl">Message received</h2>
          <p role="status" className="mb-8 text-paper/70">
            Thanks for reaching out. Your message was accepted, and a reply is
            on its way soon.
          </p>
          <button
            type="button"
            className="contact-button"
            onClick={() => setStatus('idle')}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          action="/contact.html"
          data-netlify="true"
          netlify-honeypot="bot-field"
          aria-busy={status === 'pending'}
          onSubmit={submit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Leave this empty
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <fieldset
            disabled={status === 'pending'}
            className="min-w-0 space-y-8 disabled:opacity-70"
          >
            <legend className="eyebrow mb-8">Project brief</legend>
            <div>
              <label htmlFor="name" className="eyebrow block !text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                className="contact-input"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="eyebrow block !text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className="contact-input"
                placeholder="you@brand.com"
              />
            </div>
            <div>
              <label htmlFor="service" className="eyebrow block !text-muted">
                Service
              </label>
              <select
                id="service"
                name="service"
                className="contact-input"
                defaultValue="Logo design"
              >
                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="eyebrow block !text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={5}
                className="contact-input resize-y"
                placeholder="What is it, who is it for, and where will it be seen?"
              />
            </div>
            <button type="submit" className="contact-button">
              <Send aria-hidden="true" size={16} />
              {status === 'pending' ? 'Sending…' : 'Send message'}
            </button>
          </fieldset>
          <p role="status" className="sr-only">
            {status === 'pending' ? 'Sending your message…' : ''}
          </p>
          {status === 'error' && (
            <p
              role="alert"
              className="mt-6 rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm text-paper"
            >
              We couldn’t confirm your message. Your details are still here;
              please try again, or message on WhatsApp instead. Local previews
              don’t process submissions.
            </p>
          )}
        </form>
      )}
    </div>
  )
}
