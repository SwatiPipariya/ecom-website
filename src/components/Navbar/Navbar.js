import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between font-sans text-xl items-center  py-4 px-6">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src="/path/to/your/logo.png" alt="Logo" className="h-8 mr-2" />
        {/* <span className="text-white text-lg font-semibold">Your Logo</span> */}
      </div>

      {/* Navbar links on the right */}
      <ul className="flex">
        <li className="mr-8"><Link to="/">HOME</Link></li>
        <li className="mr-8"><Link to="/pages">PAGES</Link></li>
        <li className="mr-8"><Link to="/products">PRODUCTS</Link></li>
        <li className="mr-8"><Link to="/blog">BLOG</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>  
  );
}

export default Navbar;
