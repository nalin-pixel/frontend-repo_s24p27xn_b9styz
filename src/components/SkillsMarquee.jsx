import React, { useEffect, useRef } from 'react'

const skills = [
  'User Research','Wireframing','Prototyping','Usability Testing','Interaction & Visual Design','Information Architecture','Design Thinking','HTML','CSS','Bootstrap','PHP Native','MySQL','VSCode','Figma (Advanced)','Leadership','Team Collaboration','Problem Solving','Time Management','Adaptability','Communication'
]

export default function SkillsMarquee() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = 0
    let raf
    const speed = 0.5
    const step = () => {
      start -= speed
      el.style.transform = `translateX(${start}px)`
      if (Math.abs(start) > el.scrollWidth / 2) start = 0
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  const row = [...skills, ...skills]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl p-4 md:p-6 bg-gradient-to-r from-pink-200 via-blue-200 to-pink-200">
          <div className="pointer-events-none absolute inset-0 bg-white/30 backdrop-blur-xl rounded-3xl" />
          <div className="relative whitespace-nowrap will-change-transform" ref={ref}>
            {row.map((s, i) => (
              <span key={i} className="inline-block mx-2 md:mx-3 my-2 px-4 py-2 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/60 text-slate-700 shadow">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
