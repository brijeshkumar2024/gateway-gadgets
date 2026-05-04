import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const ProductCard = ({ product, onAdd }) => {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-soft-lg overflow-hidden"
    >
      <Link to={`/product/${product.id}`} className="block p-4">
        <div className="w-full h-44 flex items-center justify-center bg-gray-50">
          <img src={product.imgSrc} alt={product.title} loading="lazy" className="max-h-36 object-contain" />
        </div>
        <div className="mt-3">
          <h3 className="text-sm font-semibold text-gray-900">{product.title}</h3>
          <p className="text-xs text-gray-500 mt-1">{product.description}</p>
        </div>
      </Link>
      <div className="p-3 border-t border-gray-100 flex items-center justify-between">
        <div className="text-lg font-semibold text-primary">{product.price} ₹</div>
        <button onClick={() => onAdd(product)} className="px-3 py-1 rounded-md bg-accent text-white text-sm">Add</button>
      </div>
    </motion.div>
  )
}

export default ProductCard

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
}
