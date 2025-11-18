import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-12">Contact</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-white/60 bg-white/60 backdrop-blur-xl p-6 shadow">
            <h3 className="font-semibold text-slate-900 mb-4">Info</h3>
            <ul className="space-y-3 text-slate-700">
              <li><span className="font-medium">Email:</span> dahlia@example.com</li>
              <li><span className="font-medium">Phone:</span> +62 812-3456-7890</li>
              <li><span className="font-medium">LinkedIn:</span> linkedin.com/in/dahlia</li>
            </ul>
          </div>
          <form className="rounded-3xl border border-white/60 bg-white/60 backdrop-blur-xl p-6 shadow space-y-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Name</label>
              <input type="text" className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Email</label>
              <input type="email" className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Message</label>
              <textarea rows="5" className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Your message..." />
            </div>
            <button type="submit" className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:shadow-[0_10px_30px_rgba(236,72,153,0.35)] transition">Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
