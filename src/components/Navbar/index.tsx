import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`} aria-label="Main navigation">
      <div className={s.inner}>

        <NavLink to="/" className={s.logo} onClick={close} aria-label="EcoClean Toronto home">
          <span className={s['logo-mark']}>🌿</span>
          <span className={s['logo-text']}>Eco<span>Clean</span></span>
        </NavLink>

        <div className={`${s.links} ${open ? s.open : ''}`}>
          <NavLink to="/"        className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`} end onClick={close}>Home</NavLink>
          <NavLink to="/blog"    className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`} onClick={close}>Blog</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${s.link} ${s.cta} ${isActive ? s.active : ''}`} onClick={close}>Book Now</NavLink>
        </div>

        <button
          className={`${s.hamburger} ${open ? s.open : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

      </div>
    </nav>
  )
}
