import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Navbar = () => {

const[isOpen, setIsOpen] = useState(false);

const toggleOpen = () => {
   setIsOpen(!isOpen)
}

  return (
    <nav className="flex justify-between font-sans text-xl items-center  py-4 px-6">

      {/* Logo on the left */}
      <div className="flex items-center">
        <img src="/path/to/your/logo.png" alt="Logo" className="h-8 mr-2" />
      </div>

      {/* Hamburger functionality */}
      <div className="block lg:hidden static">
        <button onClick={toggleOpen} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z" />
            ) : (
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Navbar links on the right */}
      {/* <ul className="flex font-mono font-bold "> */}
      <ul className={`lg:flex font-mono font-bold ${isOpen ? 'block' : 'hidden'}`}>

        <li className="mr-8"><Link to="/">HOME</Link></li>
        <li className="mr-8"><Link to="/pages">PAGES</Link></li>
        <li className="mr-8"><Link to="/products">PRODUCTS</Link></li>
        <li className="mr-8"><Link to="/blog">BLOG</Link></li>
        <li className='mr-5'><Link to="/contact">CONTACT</Link></li>
        <li className='w-8 h-8 flex justify-center items-center bg-slate-200 rounded-full mr-2'><FaTwitter className='w-6 h-6 m-auto '/></li>
        <li className='w-8 h-8 flex justify-center items-center bg-slate-200 rounded-full mr-2'><FaFacebookF/></li>
        <li className='w-8 h-8 flex justify-center items-center bg-slate-200 rounded-full '><IoSearch className='w-6 h-6 m-auto '/></li>

      </ul>
    </nav>  
  );
}

export default Navbar;
