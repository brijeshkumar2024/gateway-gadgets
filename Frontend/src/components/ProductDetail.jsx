import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import Skeleton from './ui/Skeleton'

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const filterProduct = items.find((prodcut) => prodcut.id == id);
    setProduct(filterProduct || {});
    setIsLoaded(false);
    const timeoutId = setTimeout(() => setIsLoaded(true), 350);

    return () => clearTimeout(timeoutId);
  }, [id]);

  const relatedProducts = useMemo(
    () => items.filter((suman) => suman.category === product.category && suman.id !== product.id),
    [product]
  );

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1200} theme="dark" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-soft-lg flex items-center justify-center border border-white/60">
            {isLoaded ? (
              <img src={product.imgSrc} alt={product.title} className="max-h-80 object-contain" />
            ) : (
              <Skeleton className="h-80 w-full" />
            )}
          </div>
          <div className="rounded-3xl bg-white/75 backdrop-blur-xl border border-white/60 shadow-soft-lg p-6">
            {isLoaded ? (
              <>
                <p className="text-xs uppercase tracking-[0.3em] text-violet-600">Product details</p>
                <h1 className="mt-2 text-3xl font-display font-bold">{product.title}</h1>
                <p className="mt-4 text-gray-600">{product.description}</p>
                <div className="mt-6 flex items-center gap-4 flex-wrap">
                  <div className="text-2xl font-bold text-primary">₹ {product.price}</div>
                  <button onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)} className="px-5 py-3 rounded-xl bg-accent text-white shadow-lg shadow-accent/20 hover:-translate-y-0.5 transition-transform">Add to cart</button>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-2xl bg-slate-950 text-white p-3">Secure checkout</div>
                  <div className="rounded-2xl bg-slate-100 p-3">Premium delivery</div>
                  <div className="rounded-2xl bg-slate-100 p-3">Easy returns</div>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="flex items-center gap-4 pt-2">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-36" />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <h2 className="mt-10 text-xl font-semibold">Related Products</h2>
        <Product cart={cart} setCart={setCart} items={relatedProducts} />
      </main>
    </>
  )
}

export default ProductDetail;

ProductDetail.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
}
