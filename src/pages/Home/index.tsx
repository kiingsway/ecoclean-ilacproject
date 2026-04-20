import { Link } from 'react-router-dom'
import s from './Home.module.scss'
import { Helmet } from 'react-helmet-async'

const services = [
  { icon: '🏠', name: 'Residential Cleaning', desc: 'Regular home cleaning tailored to your schedule.' },
  { icon: '✨', name: 'Deep Cleaning', desc: 'Thorough top-to-bottom clean for any space.' },
  { icon: '🏢', name: 'Office Cleaning', desc: 'Keep your workplace fresh and productive.' },
  { icon: '🔑', name: 'Move In / Move Out', desc: 'Spotless handovers, stress-free transitions.' },
  { icon: '📅', name: 'Recurring Service', desc: 'Weekly, bi-weekly, or monthly — your choice.' },
]

const whyItems = [
  { icon: '🌿', title: 'Non-toxic products', text: 'Biodegradable, certified eco-friendly formulas safe for kids and pets.' },
  { icon: '🛡️', title: 'Insured & vetted', text: 'Fully insured cleaners with thorough background checks.' },
  { icon: '⏰', title: 'Flexible scheduling', text: 'Weekday, weekend, and same-day bookings available.' },
  { icon: '⭐', title: 'Satisfaction guaranteed', text: "Not happy? We'll come back and make it right — free of charge." },
  { icon: '🏆', title: 'Trained professionals', text: 'Our team follows a strict cleaning protocol for consistent results.' },
  { icon: '📍', title: 'Across Toronto', text: 'Serving all neighbourhoods — downtown to the suburbs.' },
]

export default function Home() {
  return (
    <>
      {/* SEO meta tags — in a real app use react-helmet or Vite's index.html */}
      <Helmet>
        <title>Eco-Friendly Cleaning Services in Toronto | EcoClean</title>
        <meta
          name="description"
          content="Eco-friendly cleaning services in Toronto using safe, non-toxic products. Book EcoClean Toronto for a healthier home today."
        />
        <meta
          name="keywords"
          content="eco-friendly cleaning Toronto, green cleaning services, home cleaning Toronto, sustainable cleaning, eco cleaning company"
        />
      </Helmet>

      <main className={s.page}>

        {/* ── Hero ── */}
        <section className={s.hero} aria-label="Hero">
          <div className={s['hero-inner']}>
            <span className={s.eyebrow}>Toronto's Green Cleaning Experts</span>

            <h1 className={s.h1}>
              Eco-Friendly Cleaning<br />Services in Toronto
            </h1>

            <p className={s['hero-sub']}>
              EcoClean Toronto offers professional <strong>eco-friendly cleaning services</strong> designed
              to keep your home spotless while protecting your health and the environment.
            </p>

            <div className={s['btn-row']}>
              <Link to="/contact" title="Contact EcoClean Toronto for cleaning services" className={`${s.btn} ${s['btn--white']}`}>
                Book Now
              </Link>
              <Link to="/contact" title="Contact EcoClean Toronto for cleaning services" className={`${s.btn} ${s['btn--outline-white']}`}>
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Wave divider */}
          <svg className={s['hero-wave']} viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </section>

        {/* ── Section 1: Intro ── */}
        <section className={`${s.section} ${s['section--white']}`} aria-labelledby="intro-heading">
          <div className={s.container}>
            <span className={s.label}>Who we are</span>
            <h2 className={s.h2} id="intro-heading">Welcome to EcoClean Toronto</h2>
            <p className={s.body}>
              EcoClean Toronto offers professional <strong>eco-friendly cleaning services in Toronto</strong> designed
              to keep your home spotless while protecting your health and the environment. We believe
              a truly clean home starts with ingredients that are as safe as the space itself — no harsh
              chemicals, no compromises.
            </p>
          </div>
        </section>

        {/* ── Section 2: Value ── */}
        <section className={`${s.section} ${s['section--blue']}`} aria-labelledby="value-heading">
          <div className={s.container}>
            <span className={s.label}>Our promise</span>
            <h2 className={s.h2} id="value-heading">Safe for your family, kind to the planet</h2>
            <p className={s.body}>
              Our team uses <strong>non-toxic, biodegradable products</strong> that are safe for children,
              pets, and sensitive individuals. Every product we use carries a certified eco-label, and
              we continuously review our formulas to ensure the lowest possible environmental impact —
              because we know the choices we make today shape the Toronto of tomorrow.
            </p>
          </div>
        </section>

        {/* ── Section 3: Services ── */}
        <section className={`${s.section} ${s['section--white']}`} aria-labelledby="services-heading">
          <div className={s.container}>
            <span className={s.label}>What we offer</span>
            <h2 className={s.h2} id="services-heading">Our cleaning services</h2>
            <p className={s.body}>
              We provide <strong>deep cleaning, apartment cleaning, and move-out cleaning services</strong> across
              Toronto — tailored to your needs and schedule.
            </p>
            <div className={s['services-grid']} role="list">
              {services.map(({ icon, name, desc }) => (
                <article className={s['service-card']} key={name} role="listitem">
                  <span className={s['service-card-icon']} aria-hidden="true">{icon}</span>
                  <h3 className={s['service-card-name']}>{name}</h3>
                  <p className={s['service-card-desc']}>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Why Choose Us ── */}
        <section className={`${s.section} ${s['section--pale']}`} aria-labelledby="why-heading">
          <div className={s.container}>
            <span className={s.label}>Why EcoClean</span>
            <h2 className={s.h2} id="why-heading">Why choose us</h2>
            <p className={s.body}>
              Flexible scheduling, trained professionals, and a commitment to sustainability —
              here's what sets EcoClean apart.
            </p>
            <div className={s['why-grid']}>
              {whyItems.map(({ icon, title, text }) => (
                <article className={s['service-card'] + " " + s['why-card']} key={title}>
                  <span className={s['why-card-icon']} aria-hidden="true">{icon}</span>
                  <h3 className={s['why-card-title']}>{title}</h3>
                  <p className={s['why-card-text']}>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: CTA ── */}
        <section className={s.cta} aria-labelledby="cta-heading">
          <div className={s['cta-inner']}>
            <h2 className={s['cta-title']} id="cta-heading">
              Book your eco-friendly cleaning today
            </h2>
            <p className={s['cta-sub']}>
              Join hundreds of Toronto families who've made the switch. Book your first session
              and experience a cleaner home without the chemical footprint.
            </p>
            <div className={s['btn-row']}>
              <Link to="/contact" title="Contact EcoClean Toronto for cleaning services" className={`${s.btn} ${s['btn--white']}`}>Book Now</Link>
              <Link to="/contact" title="Contact EcoClean Toronto for cleaning services" className={`${s.btn} ${s['btn--outline-white']}`}>Get Free Quote</Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
