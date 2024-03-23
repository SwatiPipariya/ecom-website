import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Pages from './components/Pages/Pages'
import Products from './components/Products/Products'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <Router>
      <div className='sumo'>
        <Navbar />
            <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/pages' Component={Pages} />
             <Route path='/products' Component={Products} />
             <Route path='/blog' Component={Blog} />
             <Route path='/contact' Component={Contact} />
             </Routes>
      </div>

    </Router>
  )
}

export default App