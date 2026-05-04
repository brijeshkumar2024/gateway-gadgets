import Hero from './Hero'
import Features from './Features'
import Testimonials from './Testimonials'
import Product from './Product'
import { items } from './Data'
import PropTypes from 'prop-types'

const Home = ({ cart, setCart, data }) => {
  // Show top-level landing sections and products
  return (
    <div>
      <Hero />
      <Features />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-semibold">Popular picks</h2>
        <Product items={data.length ? data : items} cart={cart} setCart={setCart} />
      </section>
      <Testimonials />
    </div>
  )
}

export default Home

Home.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}