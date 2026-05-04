import React, { useEffect, useState } from 'react'
import ProductCard from './ui/ProductCard'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'
import Skeleton from './ui/Skeleton'
import PropTypes from 'prop-types'

const skeletonCards = ['skeleton-1', 'skeleton-2', 'skeleton-3', 'skeleton-4', 'skeleton-5', 'skeleton-6']

const Product = ({ items, cart, setCart }) => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsReady(true), 350)
    return () => clearTimeout(timeoutId)
  }, [items])

  const addToCart = (product) => {
    const obj = {
      id: product.id,
      price: product.price,
      title: product.title,
      description: product.description,
      imgSrc: product.imgSrc,
    }
    setCart([...cart, obj])
    toast.success('Item added to cart', { autoClose: 1200, theme: 'dark' })
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={1200} theme="dark" />

      <section id="products" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {isReady ? (
            items.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <ProductCard product={product} onAdd={addToCart} />
              </motion.div>
            ))
          ) : (
            skeletonCards.map((placeholder) => (
              <div key={placeholder} className="rounded-xl bg-white shadow-soft-lg overflow-hidden border border-gray-100">
                <Skeleton className="h-44 rounded-none" />
                <div className="p-4 space-y-3">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                  <div className="flex items-center justify-between pt-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-9 w-20" />
                  </div>
                </div>
              </div>
            ))
          )}
        </motion.div>
      </section>
    </>
  )
}

export default Product

Product.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
}
