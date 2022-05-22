import React from 'react'
import ArrowUp from '../../components/arrowUp/ArrowUp'
import Copyright from '../../components/copyright/Copyright'
import Footer from '../../components/footer/Footer'
import MiniNav from '../../components/miniNav/MiniNav'
import Navbar from '../../components/navbar/Navbar'
import TestimonialsInfo from '../../components/testimonialsInfo/TestimonialsInfo'
import './testimonials.css'

const Testimonials = () => {
  return (
    <div id='Testimonials'>
      <Navbar />
      <MiniNav title='Testimonials' />
      
      <div className='TsBox'>
        <TestimonialsInfo />  
      </div>
      
      <Footer />
      <Copyright />
      <ArrowUp href='#Testimonials' /> 
    </div>
  )
}

export default Testimonials