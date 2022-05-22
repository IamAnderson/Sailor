import React from 'react'
import './App.css'
import { About, Blog, Contact, Home, Portfolio, Pricing, Services, Teams, Testimonials } from './pages/import'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { HomeData } from './pages/home/HomeData'

const App = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home slides={HomeData}/>} exact/>
                <Route path='/About' element={<About />} exact/>
                <Route path='/Blog' element={<Blog />} exact/>
                <Route path='/Contact' element={<Contact />} exact/>
                <Route path='/Portfolio' element={<Portfolio />} exact/>
                <Route path='/Pricing' element={<Pricing />} exact/>
                <Route path='/Services' element={<Services />} exact/>
                <Route path='/Teams' element={<Teams />} exact/>
                <Route path='/Testimonials' element={<Testimonials />} exact/>
            </Routes>
        </Router>
    </>
  )
}

export default App