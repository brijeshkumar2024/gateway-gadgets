import { useState, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FiSearch, FiMoon, FiSun } from 'react-icons/fi'
import { ThemeContext } from './ui/ThemeProvider'
import PropTypes from 'prop-types'



const Navbar = ({setData,cart}) => {
  // console.log(useLocation())
  const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    // console.log(element)
    setData(element)
  }

  const filterByPrice = (price) =>{
    const element = items.filter((product)=>product.price >=price)
    setData(element)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }


  const { theme, toggle } = useContext(ThemeContext)

  return (
    <header className="site-header">
      <div className="nav-container gap-4">
        <Link to={'/'} className="brand-link">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="24" height="24" rx="6" fill="#7c3aed" />
          </svg>
          Gadgets
        </Link>

        <form onSubmit={handleSubmit} className="relative flex-1 max-w-2xl">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search products, brands, models..."
            className="search-input pl-10"
            aria-label="Search products"
          />
        </form>

        <div className="flex items-center gap-3">
          <Link to={'/cart'} className="relative inline-flex">
            <button type="button" className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 transition-transform hover:-translate-y-0.5">
              <BsFillCartCheckFill style={{fontSize:'1.25rem'}} />
            </button>
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-white bg-red-500 rounded-full">{cart.length}</span>
          </Link>

          <Link to={'/login'} className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors">Login</Link>
          <Link to={'/signup'} className="text-sm text-white bg-primary px-4 py-2 rounded-xl shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform">Sign Up</Link>

          <button onClick={toggle} aria-label="Toggle theme" className="p-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-md hover:bg-white transition-colors">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>

      {location.pathname === '/' && (
        <div className="filter-bar border-t border-white/20 shadow-inner">
          <div className="font-semibold whitespace-nowrap">Filter by →</div>
          <button onClick={() => setData(items)} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">No filter</button>
          <button onClick={() => filterByCategory('mobiles')} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">Mobiles</button>
          <button onClick={() => filterByCategory('laptops')} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">Laptops</button>
          <button onClick={() => filterByCategory('tablets')} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">Tablets</button>
          <button onClick={() => filterByPrice(29999)} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">{">="} 29,999</button>
          <button onClick={() => filterByPrice(49999)} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">{">="} 49,999</button>
          <button onClick={() => filterByPrice(69999)} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">{">="} 69,999</button>
          <button onClick={() => filterByPrice(89999)} className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">{">="} 89,999</button>
        </div>
      )}
    </header>
  )
}

export default Navbar

Navbar.propTypes = {
  setData: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
}