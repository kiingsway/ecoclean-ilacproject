import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LowercaseRedirect from './features/LowercaseRedirect'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

function App() {
  return (
    <BrowserRouter>
      <LowercaseRedirect />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
