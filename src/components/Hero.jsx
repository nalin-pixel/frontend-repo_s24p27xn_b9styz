import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Mail, Download, Send } from 'lucide-react'

export default function Hero() {
  const [typed, setTyped] = useState('')
  const title = "Hi! I’m Dahlia"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTyped(title.slice(0, i + 1))
      i++
      if (i === title.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative pt-36 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(700px_circle_at_80%_30%,rgba(236,72,153,0.25),transparent_45%)]" />
      <div className="absolute -z-0 right-0 top-0 w-full md:w-1/2 h-[700px]">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 drop-shadow-[0_2px_0_rgba(255,255,255,0.3)]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">{typed}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-slate-700 text-justify leading-relaxed bg-white/50 backdrop-blur-xl border border-white/50 rounded-2xl p-5 shadow-[0_10px_40px_rgba(59,130,246,0.15)]"
            >
              a budding UI/UX Designer crafting clean, intuitive, and modern digital experiences. I turn user needs into simple, meaningful solutions. Explore my work and see how I grow with each project.
            </motion.p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg hover:shadow-pink-500/30 transition-all hover:-translate-y-0.5">
                <Send className="h-5 w-5" /> Contact me
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/60 bg-white/60 text-slate-800 hover:border-blue-400 hover:bg-blue-50 transition-all">
                <Download className="h-5 w-5" /> Download CV
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              {[{Icon:Instagram, href:'#'},{Icon:Linkedin, href:'#'},{Icon:Mail, href:'mailto:'}].map(({Icon, href}, idx) => (
                <a key={idx} href={href} className="h-11 w-11 rounded-xl flex items-center justify-center border border-white/60 bg-white/60 text-slate-700 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-500 transition-all shadow">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-pink-400/40 to-blue-500/40 blur-3xl" />
            <div className="relative h-full flex items-end">
              <div className="w-full">
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/50 bg-white/60 backdrop-blur-xl shadow-[0_20px_60px_rgba(59,130,246,0.25)]">
                  <img src="/portrait.jpg" alt="Dahlia" className="w-full h-full object-cover object-top" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {['Figma','Prototype','Wireframe','Fonts','User Research','Icon'].map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="col-span-1 bg-white/50 backdrop-blur-xl border border-white/60 rounded-2xl px-3 py-2 text-sm text-slate-700 shadow hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(236,72,153,0.25)] transition-all"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating glowing orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-10 top-24 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 blur-xl opacity-70"
      />
    </section>
  )
}
