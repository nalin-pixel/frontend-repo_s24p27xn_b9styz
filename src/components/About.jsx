import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 to-blue-500 blur-2xl opacity-70" />
            <div className="relative mx-auto h-80 w-80 rounded-full p-1 bg-gradient-to-tr from-pink-400 to-blue-500">
              <div className="h-full w-full rounded-full overflow-hidden bg-white/60 backdrop-blur-xl border border-white/60">
                <img src="/portrait.jpg" alt="Dahlia" className="h-full w-full object-cover object-top" />
              </div>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-slate-700 text-justify leading-relaxed bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl p-6 shadow"
          >
            As a budding UI/UX Designer, I focus on creating clean, intuitive, and modern digital experiences. I’m advanced in Figma and experienced in user research, wireframing, prototyping, and usability testing. I also have basic front-end skills (HTML, Bootstrap CSS, PHP Native) to support smooth collaboration with developers. Always learning and growing, I strive to deliver functional, engaging, and valuable design solutions.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
