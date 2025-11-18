import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillsMarquee from './components/SkillsMarquee'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-slate-600">
        <p>© {new Date().getFullYear()} Dahlia — All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
