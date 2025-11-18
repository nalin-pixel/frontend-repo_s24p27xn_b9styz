import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { title: 'FinTrack – Finance Dashboard', img: '/proj1.jpg', desc: 'A modern finance dashboard focusing on clean information hierarchy, visual clarity, and delightful micro-interactions.' },
  { title: 'EduLearn – Course Platform', img: '/proj2.jpg', desc: 'Learning platform prototype with intuitive flows, clear navigation, and responsive UI patterns.' },
]

export default function Projects() {
  const [open, setOpen] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-3xl overflow-hidden border border-white/60 bg-white/60 backdrop-blur-xl shadow"
            >
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <button onClick={() => setOpen(i)} className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:shadow-[0_10px_30px_rgba(236,72,153,0.35)] transition">View more</button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {open !== null && (
            <motion.div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
              <motion.div onClick={(e) => e.stopPropagation()} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="mx-auto mt-24 max-w-3xl rounded-3xl overflow-hidden border border-white/60 bg-white/70 backdrop-blur-xl shadow">
                <img src={projects[open].img} alt={projects[open].title} className="w-full h-72 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{projects[open].title}</h3>
                  <p className="text-slate-700">{projects[open].desc}</p>
                  <div className="mt-6 text-right">
                    <button onClick={() => setOpen(null)} className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">Close</button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
