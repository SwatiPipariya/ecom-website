import React, { useState } from 'react'

const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"PAGES",link:"/pages"},
      {name:"PRODUCTS",link:"/products"},
      {name:"BLOG'S",link:"/blog"},
      {name:"CONTACT",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full static top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-blue py-4 md:px-10 px-7 '>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 '>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
         E-Commerce
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden '>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 font-semibold'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        {/* <Button>
          Get Started
        </Button> */}
      </ul>
      </div>
    </div>
  )
}

export default Navbar


















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoSearch } from "react-icons/io5";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";


// const Navbar = () => {

// const[isOpen, setIsOpen] = useState(false);

// const toggleOpen = () => {
//    setIsOpen(!isOpen)
// }

//   return (
//     <nav className="flex justify-between font-sans text-xl items-center  py-4 px-6">

//       {/* Logo on the left */}
//       <div className="flex items-center ">
//         <img src="/path/to/your/logo.png" alt="Logo" className="h-8 mr-2 " />
//       </div>

//       {/* Hamburger functionality */}
//       <div className="block lg:hidden static">
//         <button onClick={toggleOpen} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 ">
//           <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//             {isOpen ? (
//               <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z" />
//             ) : (
//               <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Navbar links on the right */}
//       {/* <ul className="flex font-mono font-bold "> */}
//       <ul className={`lg:flex font-mono font-bold ${isOpen ? 'block' : 'hidden'}`}>

//         <li className="mr-8"><Link to="/">HOME</Link></li>
//         <li className="mr-8"><Link to="/pages">PAGES</Link></li>
//         <li className="mr-8"><Link to="/products">PRODUCTS</Link></li>
//         <li className="mr-8"><Link to="/blog">BLOG</Link></li>
//         <li className='mr-5'><Link to="/contact">CONTACT</Link></li>
//         <li className='w-8 h-8 flex justify-center items-center bg-slate-200 rounded-full mr-2'><FaTwitter className='w-6 h-6 m-auto '/></li>
//         <li className='w-8 h-8 flex justify-center items-center bg-slate-200 rounded-full mr-2'><FaFacebookF/></li>
//         <li className='w-8 h-8 flex justify-center items-center bg-slate-200 rounded-full '><IoSearch className='w-6 h-6 m-auto '/></li>

//       </ul>
//     </nav>  
//   );
// }

// export default Navbar;
