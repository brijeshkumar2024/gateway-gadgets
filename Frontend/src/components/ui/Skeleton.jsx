import React from 'react'

const Skeleton = ({ className = 'h-44' }) => {
  return (
    <div className={`animate-pulse bg-gray-100 rounded-xl ${className}`} />
  )
}

export default Skeleton
