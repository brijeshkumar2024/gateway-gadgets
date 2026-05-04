import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
import PropTypes from 'prop-types'

const SearchItem = ({cart, setCart}) => {
  // console.log(useParams())
  const {term} = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () =>{
      const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
      // console.log(data)
      setFilterData(data)
    }

    filteredData();
    
  }, [term])
  


  return (
   <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="mb-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-soft-lg p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-violet-600">Search results</p>
      <h1 className="mt-2 text-3xl font-display font-bold">Results for “{term}”</h1>
      <p className="mt-2 text-gray-600">Showing premium results with a consistent shopping experience.</p>
    </div>
    <Product cart={cart} setCart={setCart} items={filterData} />
   </section>
  )
}

export default SearchItem

SearchItem.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
}