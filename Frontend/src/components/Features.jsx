import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {title: 'Curated Selection', body: 'Only the best products with quality checks and hand-picked recommendations.'},
  {title: 'Fast Checkout', body: 'Streamlined, secure checkout flow with saved addresses and payment options.'},
  {title: 'Premium Support', body: 'Priority support, easy returns and dedicated help.'},
  {title: 'Elegant UI System', body: 'Glassmorphism cards, premium spacing, and refined typography throughout.'},
  {title: 'Dark Mode', body: 'A polished alternate theme that feels native instead of bolted on.'},
  {title: 'Responsive by Design', body: 'Mobile-first layout that keeps the store high-end across all screen sizes.'}
]

const Features = () => {
  return (
    <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-slate-950 text-white px-6 py-8 shadow-2xl shadow-slate-900/30"
      >
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Why choose us</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold">Built like a premium product, not a template</h2>
          </div>
          <p className="max-w-xl text-slate-300 text-sm">Every component is designed to feel expensive, responsive, and trustworthy, with enough visual depth to support a startup demo or investor pitch.</p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {features.map((f, index) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Features
