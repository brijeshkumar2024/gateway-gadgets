import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + Number(String(item.price).replaceAll(',', '')), 0)

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-3xl bg-white/75 backdrop-blur-xl border border-white/50 shadow-soft-lg p-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-600">Shopping cart</p>
            <h1 className="mt-2 text-3xl font-display font-bold">Your premium cart</h1>
          </div>
          <div className="rounded-2xl bg-slate-950 text-white px-4 py-3">
            <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Estimated total</div>
            <div className="text-2xl font-bold">₹ {total.toLocaleString('en-IN')}</div>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="py-16 text-center">
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="mt-2 text-gray-600">Add premium products to see the full shopping experience.</p>
            <Link to="/" className="inline-flex mt-6 px-5 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/20">Continue shopping</Link>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            <AnimatePresence>
              {cart.map((product, index) => (
                <motion.div
                  key={`${product.id}-${index}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 rounded-2xl bg-white border border-gray-100 p-4 shadow-soft-lg"
                >
                  <div className="rounded-xl bg-gray-50 p-3 flex items-center justify-center">
                    <img src={product.imgSrc} className="h-36 object-contain" alt={product.title} loading="lazy" />
                  </div>
                  <div className="flex flex-col justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{product.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="text-2xl font-bold text-primary">₹ {Number(String(product.price).replaceAll(',', '')).toLocaleString('en-IN')}</div>
                      <button className="px-4 py-2 rounded-xl bg-accent text-white hover:-translate-y-0.5 transition-transform">Buy now</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {cart.length !== 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button className="px-5 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/20">Checkout</button>
            <button onClick={() => setCart([])} className="px-5 py-3 rounded-xl border border-red-200 text-red-600 bg-white hover:bg-red-50">Clear cart</button>
          </div>
        )}
      </div>
    </main>
  )
}

export default Cart

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
}