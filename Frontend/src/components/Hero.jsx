import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/65 backdrop-blur-xl shadow-soft-lg px-6 py-10 sm:px-8 md:px-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.20),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_30%)]" />
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <div className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-semibold text-accent shadow-sm">Investor-ready storefront</div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-gray-900">Premium gadgets, curated for modern buyers</h1>
          <p className="mt-4 text-gray-600 max-w-xl">Discover a polished storefront with elegant glassmorphism, subtle motion, dark mode, and conversion-focused shopping flows.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="px-5 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">Shop now</a>
            <a href="#features" className="px-5 py-3 rounded-xl border border-gray-200 bg-white/80 hover:bg-white transition-colors">Learn more</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div><span className="block text-xl font-bold text-gray-900">4.9/5</span> customer rating</div>
            <div><span className="block text-xl font-bold text-gray-900">24h</span> fast delivery</div>
            <div><span className="block text-xl font-bold text-gray-900">100+</span> premium products</div>
          </div>
        </motion.div>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <div className="relative rounded-3xl border border-white/50 bg-white/70 p-6 shadow-2xl shadow-violet-500/10">
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
            <div className="grid gap-4">
              <div className="rounded-2xl bg-gray-900 text-white p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-violet-200">New drop</p>
                <h3 className="mt-2 text-2xl font-semibold">S24 Ultra, iPad, MacBook vibes</h3>
                <p className="mt-2 text-sm text-slate-300">The interface feels like a premium dashboard, not a basic catalog.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-4 shadow-soft-lg">
                  <div className="text-sm text-gray-500">Conversion rate</div>
                  <div className="mt-2 text-3xl font-bold text-primary">+32%</div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-soft-lg">
                  <div className="text-sm text-gray-500">UX score</div>
                  <div className="mt-2 text-3xl font-bold text-primary">A+</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </motion.div>
    </section>
  )
}

export default Hero
