import React from 'react'
import str from "../Images/str.jpg"
import laptop from "../Images/laptop.jpg"
import grl_dr4 from "../Images/grl_dr4.jpg"
import Product from "../Images/product-large-1.jpg"
import Dress from "../Images/product-large-3.jpg"
import New from "../Images/selling-products7.jpg"
import TShirt from "../Images/selling-products1.jpg"
import Hood from "../Images/selling-products18.jpg"
import { FaShoppingCart, FaTruck, FaAward } from "react-icons/fa";



function Home() {
  return (
    <div className='w-full h-screen'>

      {/* -------------Top Image Section----------------- */}
      <div>
        <img src={str} alt='Front' className='w-full h-3/5 sm:w-full' />
        <div className=' w-3/6 p-12 absolute  top-60'>
          <h2 className='text-7xl font-bold sm:text-3xl'>Summer Collection</h2>
          <p className='text-lg mt-3'>Embrace the vibrant hues and breezy fabrics of our Summer Collection, designed to infuse your wardrobe with effortless elegance under the sun's warm embrace.</p>
          <div className='bg-black w-40 px-5 py-3  h-13 absolute top-70 text-white mt-2 text-center font-bold cursor-pointer hover:bg-transparent hover:outline hover:outline-black hover:text-black'>
            Shop Now!
          </div>
        </div>
      </div>

      {/* ----------------Second Cards Section-------------------- */}
      <h2 className='text-7xl font-bold sm:text-4xl text-center m-3 my-6 underline md:underline-offset-4 text-blue-900'>Why Shop With Us ?</h2>
      <div className='flex justify-around m-1 p-2 my-8'>
        <div className='w-1/3 bg-blue-950 h-60 flex items-center justify-center text-white m-2 rounded-md py-4'>
          <div>
            <FaShoppingCart className='text-5xl m-auto' />
            <h3 className='text-2xl text-center'>Fast Delivery</h3>
            <p className='text-lg  mx-3 text-center my-2'>Variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
        <div className='w-1/3 bg-blue-950 h-60 flex items-center justify-center text-white m-2 rounded-md'>
          <div>
            <FaTruck className='text-5xl m-auto' />
            <h3 className='text-2xl text-center'>Free Shipping</h3>
            <p className='text-lg  mx-3 text-center'>Variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
        <div className='w-1/3 bg-blue-950 h-60 flex items-center justify-center text-white m-2 rounded-md'>
          <div>

            <FaAward className='text-5xl m-auto' />
            <h3 className='text-2xl text-center'>Best Quality</h3>
            <p className='text-lg mx-3 text-center' >Variations of passages of Lorem Ipsum available</p>
          </div>
        </div>

      </div>

      {/* -------------------------------Third Image Section--------------------------------- */}
      <div className='relative'>
        <img src={laptop} alt='Banner' className='object-cover h-96 w-full opacity-65' />
        <div className=' w-3/6 p-12 absolute top-9 left-2/4'>
          <h2 className='text-7xl font-bold sm:text-4xl text-blue-950'>#New Arrivals</h2>
          <p className='text-lg mt-3'>Embrace the vibrant hues and breezy fabrics of our Summer Collection, designed to infuse your wardrobe with effortless elegance under the sun's warm embrace.</p>
          <div className='bg-orange-600 w-40 px-5 py-3  h-13 absolute top-70 text-white mt-2 text-center font-medium cursor-pointer hover:bg-transparent hover:text-orange-600 hover:outline hover:outline-orange-700'>
            Shop Now!
          </div>
        </div>
      </div>
      {/* -----------------------------------Shopping Cards Section---------------------------- */}
      <h3 className='text-9xl font-bold sm:text-4xl text-center m-3 my-6 underline md:underline-offset-4 text-orange-900'>Our Products !!</h3>
      {/* ---------------First Products Section------------------ */}
      <div className='w-full flex justify-around items-center'>
        <div className='w-1/3  flex flex-col items-center justify-center'>
          <img src={Product} alt='Dress' className='w-60 shadow-2xl' />
          <h4 className='text-2xl font-semibold text-left'>Half Sleeve T-Shirt</h4>
          <p className='text-xl text-red-900'>$30.00</p>
        </div>
        <div className='w-1/3  flex flex-col items-center justify-center'>
          <img src={Dress} alt='Dress' className='w-60 shadow-2xl' />
          <h4 className='text-2xl font-semibold text-left'>Long gray coat</h4>
          <p className='text-xl text-red-900'>$80.00</p>
        </div>
        <div className='w-1/3 flex flex-col items-center justify-center'>
          <img src={grl_dr4} alt='Dress' className='w-60 shadow-2xl' />
          <h4 className='text-2xl font-semibold text-left'>Long Sleeve T-Shirt</h4>
          <p className='text-xl text-red-900'>$40.00</p>
        </div>
      </div>
      {/* --------------------Second Products Section--------------- */}
      <div className='w-full flex justify-around items-center'>
        <div className='w-1/3  flex flex-col items-center justify-center'>
          <img src={New} alt='Dress' className='w-60 shadow-2xl' />
          <h4 className='text-2xl font-semibold text-left'>Full Sleeve T-Shirt</h4>
          <p className='text-xl text-red-900'>$54.00</p>
        </div>
        <div className='w-1/3  flex flex-col items-center justify-center'>
          <img src={TShirt} alt='Dress' className='w-60 shadow-2xl' />
          <h4 className='text-2xl font-semibold text-left'>Women's TShirt</h4>
          <p className='text-xl text-red-900'>$80.00</p>
        </div>
        <div className='w-1/3 flex flex-col items-center justify-center'>
          <img src={Hood} alt='Dress' className='w-60 shadow-2xl' />
          <h4 className='text-2xl font-semibold text-left'>Long Sleeve Hoodie</h4>
          <p className='text-xl text-red-900'>$89.00</p>
        </div>
      </div>
       {/* --------------Third Email Section--------------------- */}
       <div className='bg-slate-400 w-full h-90 flex  flex-col justify-center items-center'>
        <div className='w-1/2 '>
          <p className='text-5xl font-bold font-serif text-center my-5 py-3'>Subscribe To Get Discount Offers</p>
          <p className='text-center'>Sign up today and gain access to irresistible discount offers, exclusively for subscribers. Don't miss out, subscribe now!</p>
          <input type='text' className='w-5/6 h-9 my-4 ml-4 py-7 px-7  rounded-full placeholder:italic' placeholder='Enter your email'/>
          <div className='flex justify-center items-center pb-3 my-3'>
          <button className='bg-orange-700 text-white px-14 py-3 rounded-full text-lg font-semibold hover:bg-transparent hover:outline hover:outline-orange-700 hover:text-orange-700'>SUBSCRIBE</button>
          </div>
        </div>
       </div>

    </div>
  )
}

export default Home
