import React from 'react'
import str from "../Images/str.jpg"

function Home() {
  return (
    <div >
      {/* -------------Top Image----------------- */}
      <div>
        <img src={str} alt='Front' className='w-full h-1/4 gap-3 sm:w-full' />
        <div className=' w-3/6 p-12 gap-40'>
          <h2 className='text-7xl font-bold sm:text-4xl'>Summer Collection</h2>
          <p className='text-lg mt-3'>Embrace the vibrant hues and breezy fabrics of our Summer Collection, designed to infuse your wardrobe with effortless elegance under the sun's warm embrace.</p>
            <div className='bg-black w-30 p-4 h-13 absolute top-70 text-white mt-2'>
              Shop Now!
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home