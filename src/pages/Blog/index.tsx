import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Blog.module.scss'
import { POST_BODY, DEEP_CLEAN_BODY, AIR_QUALITY_BODY, EASTER_EGG_BODY, TORONTO_RATS_BODY, GREEN_CLEANING_NEWS_BODY } from './content'
import { Helmet } from 'react-helmet-async'

// ── Types ─────────────────────────────────
interface Post {
  slug: string
  tag: string
  title: string
  excerpt: string
  author: string
  initials: string
  date: string
  readTime: string
  thumb: string
  body: React.ReactNode
}

// ── Post content ──────────────────────────


// ── Posts data ────────────────────────────
const POSTS: Post[] = [
  {
    slug: 'future-of-eco-cleaning',
    tag: 'Sustainability',
    title: 'Why Eco-Friendly Cleaning in Toronto Is the Future of Home Care',
    excerpt: 'Discover why more Toronto homeowners are switching to non-toxic, biodegradable cleaning services — and what makes green cleaning better for your family and the planet.',
    author: 'Sofia Martins',
    initials: 'SM',
    date: 'April 10, 2025',
    readTime: '5 min read',
    thumb: '🌿',
    body: POST_BODY,
  },
  {
    slug: 'deep-clean-checklist',
    tag: 'Tips & Tricks',
    title: "10 Areas You're Probably Missing in Your Spring Deep Clean",
    excerpt: 'Spring cleaning season is here. We put together the definitive checklist of overlooked spots — baseboards, vents, behind appliances — so nothing slips through the cracks.',
    author: 'Daniel Park',
    initials: 'DP',
    date: 'March 22, 2025',
    readTime: '4 min read',
    thumb: '🧹',
    body: DEEP_CLEAN_BODY,
  },
  {
    slug: 'toronto-air-quality',
    tag: 'Health',
    title: 'How Indoor Air Quality in Toronto Homes Affects Your Health',
    excerpt: "Most people spend over 90% of their time indoors — yet indoor air can be significantly more polluted than outside. Here's what you can do about it.",
    author: 'Sofia Martins',
    initials: 'SM',
    date: 'February 14, 2025',
    readTime: '6 min read',
    thumb: '💨',
    body: AIR_QUALITY_BODY,
  },
  {
    slug: 'the-algorithm-whisperer',
    tag: 'Marketing Meta',
    title: 'Toronto Man Claims He Can "Smell" a Google Algorithm Update 24 Hours Before It Happens',
    excerpt: 'Is it a superpower or just too much caffeine? Meet the digital marketer who says he can feel a core update in his "left pinky finger".',
    author: 'Gary V. Jr.',
    initials: 'GJ',
    date: 'April 1, 2026', // Dia da Mentira
    readTime: '1 min read',
    thumb: '🧙‍♂️',
    body: EASTER_EGG_BODY,
  },
  {
    slug: 'toronto-rat-problem-2026',
    tag: 'Local News',
    title: 'The "Rat-pocalypse": Why Toronto is Seeing a Record Surge in Rodent Activity',
    excerpt: 'Recent city reports show a 400% increase in rodent-related calls. Here is how urban sprawl and mild winters are changing the pest landscape in the GTA.',
    author: 'Daniel Park',
    initials: 'DP',
    date: 'April 14, 2026',
    readTime: '4 min read',
    thumb: '🐀',
    body: TORONTO_RATS_BODY,
  },
  {
    slug: 'toronto-green-cleaning-boom-2025',
    tag: 'Local News',
    title: 'Toronto Sees Record Surge in Eco-Friendly Cleaning Demand in 2025',
    excerpt: 'A growing number of Toronto residents are turning to biodegradable, non-toxic cleaning services as concerns about indoor air quality and chemical exposure rise across the city.',
    author: 'Sofia Martins',
    initials: 'SM',
    date: 'April 10, 2025',
    readTime: '4 min read',
    thumb: '🧼',
    body: GREEN_CLEANING_NEWS_BODY,
  }
]

// ── Component ─────────────────────────────
export default function Blog() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const active = POSTS.find(p => p.slug === activeSlug) ?? null

  return (
    <>
      <Helmet>
        <title>Blog EcoClean Toronto | Eco-Friendly Cleaning Services</title>
        <meta
          name="description"
          content="Read EcoClean Toronto's blog for tips on eco-friendly cleaning, healthier homes, and sustainable living in Toronto."
        />
      </Helmet>

      <main className={s.page}>

        {/* ── Page header ── */}
        <section className={s.header} aria-label="Blog header">
          <div className={s['header-inner']}>
            <span className={s.eyebrow}>EcoClean Journal</span>
            <h1 className={s['h1-list']}>
              {active ? active.title : 'Tips, guides & green living'}
            </h1>
            {!active && (
              <p className={s['header-sub']}>
                Insights on eco-friendly cleaning, healthy homes, and sustainable living in Toronto.
              </p>
            )}
          </div>
          <svg className={s['header-wave']} viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </section>

        {active ? (
          /* ── Article view ── */
          <div className={s['article-wrap']}>
            <div className={s['article-container']}>

              <button className={s['article-back']} onClick={() => setActiveSlug(null)} aria-label="Back to blog list">
                ← Back to Blog
              </button>

              <span className={s['article-tag']}>{active.tag}</span>

              <h1 className={s['article-h1']}>{active.title}</h1>

              <div className={s['article-meta']}>
                <div className={s['article-author']}>
                  <div className={s['article-author-avatar']} aria-hidden="true">{active.initials}</div>
                  <div>
                    <div className={s['article-author-name']}>{active.author}</div>
                    <div className={s['article-author-role']}>EcoClean Team</div>
                  </div>
                </div>
                <div className={s['article-info']}>
                  <span>📅 {active.date}</span>
                  <span>⏱ {active.readTime}</span>
                </div>
              </div>

              <article className={s['article-body']}>
                {active.body}
              </article>

              <div className={s['article-cta']}>
                <h3>Ready for a greener clean?</h3>
                <p>Book your first eco-friendly cleaning session and experience the EcoClean difference.</p>
                <Link to="/contact" title="Contact EcoClean Toronto for cleaning services" className={s['cta-btn']}>Get a Free Quote →</Link>
              </div>

            </div>
          </div>
        ) : (
          /* ── Post list ── */
          <section className={s['list-section']}>
            <div className={s.container}>
              <div className={s['posts-grid']}>
                {POSTS.map(post => (
                  <article
                    key={post.slug}
                    className={s['post-card']}
                    onClick={() => setActiveSlug(post.slug)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Read article: ${post.title}`}
                    onKeyDown={e => e.key === 'Enter' && setActiveSlug(post.slug)}
                  >
                    <div className={s['post-card-thumb']} aria-hidden="true">
                      {post.thumb}
                    </div>
                    <div className={s['post-card-body']}>
                      <span className={s['post-tag']}>{post.tag}</span>
                      <h2 className={s['post-card-title']}>{post.title}</h2>
                      <p className={s['post-card-excerpt']}>{post.excerpt}</p>
                      <div className={s['post-meta']}>
                        <div className={s['post-author']}>
                          <div className={s['post-author-avatar']} aria-hidden="true">{post.initials}</div>
                          <span>{post.author} · {post.date}</span>
                        </div>
                        <span className={s['read-more']} aria-hidden="true">
                          Read →
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
    </>
  )
}
