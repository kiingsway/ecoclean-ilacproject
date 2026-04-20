import { useState, type FormEvent } from 'react'
import s from './Contact.module.scss'
import { Helmet } from 'react-helmet-async'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}

const INITIAL: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

const services = [
  'Residential Cleaning',
  'Deep Cleaning',
  'Office Cleaning',
  'Move In / Move Out',
  'Recurring Service',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submit — replace with real API call
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <>
      <Helmet>
        <title>Contact EcoClean Toronto | Eco-Friendly Cleaning Services</title>
        <meta
          name="description"
          content="Read EcoClean Toronto's blog for expert tips on eco-friendly cleaning in Toronto, healthier homes, and sustainable living. Discover practical advice, safe cleaning methods, and ways to maintain a clean home while protecting your family and the environment."
        />
      </Helmet>

      <main className={s.page}>

        {/* ── Page header ── */}
        <section className={s.header} aria-label="Page header">
          <div className={s['header-inner']}>
            <span className={s.eyebrow}>Get in touch</span>
            <h1 className={s.h1}>Contact EcoClean Toronto</h1>
            <p className={s['header-sub']}>
              Have questions or ready to book? Contact EcoClean Toronto today — we provide
              fast responses and excellent customer service.
            </p>
          </div>
          <svg className={s['header-wave']} viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </section>

        {/* ── Body ── */}
        <div className={s.body}>
          <div className={s.container}>

            {/* ── Left: contact info ── */}
            <aside className={s.info} aria-label="Contact information">

              <div className={s['info-block']}>
                <h2>We'd love to hear from you</h2>
                <p>
                  Whether you want a one-time deep clean or a recurring eco-friendly
                  cleaning plan, our team is ready to help.
                </p>
              </div>

              <div className={s.details}>
                <div className={s['detail-item']}>
                  <span className={s['detail-item-icon']} aria-hidden="true">📍</span>
                  <div className={s['detail-item-content']}>
                    <label>Address</label>
                    <span>123 Green St, Toronto, ON</span>
                  </div>
                </div>

                <div className={s['detail-item']}>
                  <span className={s['detail-item-icon']} aria-hidden="true">📞</span>
                  <div className={s['detail-item-content']}>
                    <label>Phone</label>
                    <a href="tel:4165551234" title="Call EcoClean Toronto">
                      (416) 555-1234
                    </a>
                  </div>
                </div>

                <div className={s['detail-item']}>
                  <span className={s['detail-item-icon']} aria-hidden="true">✉️</span>
                  <div className={s['detail-item-content']}>
                    <label>Email</label>
                    <a href="mailto:info@ecoclean.ca" title="Send email to EcoClean Toronto">
                      info@ecoclean.ca
                    </a>
                  </div>
                </div>
              </div>

              <div className={s.hours}>
                <h3>Business hours</h3>
                <ul>
                  <li><span>Monday – Friday</span>   <span>8:00 AM – 7:00 PM</span></li>
                  <li><span>Saturday</span>           <span>9:00 AM – 5:00 PM</span></li>
                  <li><span>Sunday</span>             <span>Closed</span></li>
                </ul>
              </div>

            </aside>

            {/* ── Right: form ── */}
            <div className={s['form-card']}>
              {submitted ? (
                <div className={s.success} role="alert" aria-live="polite">
                  <div className={s['success-icon']} aria-hidden="true">✅</div>
                  <h3>Message sent!</h3>
                  <p>
                    Thanks for reaching out. We'll get back to you within one business day.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm(INITIAL) }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className={s['form-title']}>Send us a message</h2>
                  <p className={s['form-sub']}>
                    Fill in the form below and we'll respond within 24 hours.
                  </p>

                  <form className={s.form} onSubmit={handleSubmit} noValidate>

                    <div className={s['form-row']}>
                      <div className={s.field}>
                        <label htmlFor="firstName">
                          First name <span className={s.required} aria-hidden="true">*</span>
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          placeholder="Jane"
                          value={form.firstName}
                          onChange={set('firstName')}
                          required
                          autoComplete="given-name"
                        />
                      </div>
                      <div className={s.field}>
                        <label htmlFor="lastName">
                          Last name <span className={s.required} aria-hidden="true">*</span>
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          value={form.lastName}
                          onChange={set('lastName')}
                          required
                          autoComplete="family-name"
                        />
                      </div>
                    </div>

                    <div className={s['form-row']}>
                      <div className={s.field}>
                        <label htmlFor="email">
                          Email <span className={s.required} aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="jane@example.com"
                          value={form.email}
                          onChange={set('email')}
                          required
                          autoComplete="email"
                        />
                      </div>
                      <div className={s.field}>
                        <label htmlFor="phone">Phone</label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="(416) 000-0000"
                          value={form.phone}
                          onChange={set('phone')}
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    <div className={s.field}>
                      <label htmlFor="service">Service needed</label>
                      <select id="service" value={form.service} onChange={set('service')}>
                        <option value="">Select a service…</option>
                        {services.map(sv => (
                          <option key={sv} value={sv}>{sv}</option>
                        ))}
                      </select>
                    </div>

                    <div className={s.field}>
                      <label htmlFor="message">
                        Message <span className={s.required} aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        placeholder="Tell us about your space and what you need…"
                        value={form.message}
                        onChange={set('message')}
                        required
                        rows={5}
                      />
                    </div>

                    <button
                      type="submit"
                      className={s.submit}
                      disabled={loading}
                      aria-busy={loading}
                    >
                      {loading ? 'Sending…' : 'Send Message →'}
                    </button>

                  </form>
                </>
              )}
            </div>

          </div>
        </div>

      </main>
    </>
  )
}
