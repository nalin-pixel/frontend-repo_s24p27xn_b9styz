import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    role: 'Maintenance Data Support',
    place: 'Nutrifood Indonesia',
    time: 'Jul 2022 – Dec 2022',
    desc: [
      'Built an interactive engineering dashboard using CodeIgniter and Excel data, improving work order tracking efficiency.',
      'Automated monitoring processes, enabling the team to manage projects faster and more accurately.',
    ],
    img: '/exp1.jpg',
  },
  {
    role: 'Social Media Creative',
    place: 'Omah Kreasi',
    time: 'Jan 2023 – Apr 2023',
    desc: [
      'Created visual content (photo & video) that enhanced product catalog engagement.',
      'Improved branding and visual appeal using Adobe Photoshop, Canva, and TikTok editing tools.',
    ],
    img: '/exp2.jpg',
  },
  {
    role: 'Secretary',
    place: 'BEM FTI UPN Veteran Yogyakarta',
    time: 'Feb 2024 – May 2025',
    desc: [
      'Successfully established collaborations with other student organizations for events.',
      'Managed documentation and sponsorship requests, strengthening project management and team coordination skills.',
    ],
    img: '/exp3.jpg',
  },
  {
    role: 'Lab Assistant',
    place: 'Web Programming, Database Management, Software Requirements Design',
    time: 'Feb 2024 – Present',
    desc: [
      'Guided ~120 students across multiple classes in web, database, and software design concepts.',
      'Developed teaching materials and practical exercises to simplify complex topics for students.',
      'Enhanced student learning experience with interactive, hands-on sessions.'
    ],
    img: '/exp4.jpg',
  },
]

const certs = [
  { name: 'Google UX Design Certificate', img: '/cert1.jpg' },
  { name: 'Figma Advanced Workshop', img: '/cert2.jpg' },
  { name: 'Usability Testing Bootcamp', img: '/cert3.jpg' },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-12">Experience</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-3xl overflow-hidden border border-white/60 bg-white/60 backdrop-blur-xl shadow hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] transition-all"
            >
              <img src={it.img} alt={it.place} className="w-full h-52 object-cover" />
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-semibold text-slate-900">{it.role}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-700">{it.place}</span>
                </div>
                <p className="text-sm text-slate-600 mb-3">{it.time}</p>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  {it.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-14 mb-6 text-center">Certificates</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden border border-white/60 bg-white/60 backdrop-blur-xl shadow group"
            >
              <div className="relative">
                <img src={c.img} alt={c.name} className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              <div className="p-4">
                <p className="font-medium text-slate-800">{c.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
