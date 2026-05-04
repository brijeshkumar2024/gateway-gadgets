import React from 'react'
import { motion } from 'framer-motion'

const quotes = [
  {name: 'Anita R.', role: 'Product Designer', text: 'Beautiful UI and fast checkout — feels like a premium SaaS storefront.'},
  {name: 'Rahul S.', role: 'Founder', text: 'Top quality products, polished details, and a conversion-friendly layout.'},
  {name: 'Maya P.', role: 'Operations Lead', text: 'Customer support resolved my issue in minutes. The experience is smooth.'}
]

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-soft-lg px-6 py-8"
      >
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-violet-600">Social proof</p>
          <h2 className="mt-2 text-2xl font-semibold">What customers say</h2>
        </div>
        <p className="max-w-xl text-sm text-gray-600">Testimonials add trust and make the storefront feel established, credible, and ready for real users.</p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {quotes.map((q, index) => (
          <motion.div
            key={q.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="p-5 rounded-2xl bg-white/80 border border-gray-100 shadow-soft-lg hover:-translate-y-1 transition-transform"
          >
            <p className="text-gray-700">“{q.text}”</p>
            <div className="mt-4 text-sm font-semibold">{q.name}</div>
            <div className="text-xs text-gray-500">{q.role}</div>
          </motion.div>
        ))}
      </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
