import React from 'react'
import ArrowUp from '../../components/arrowUp/ArrowUp'
import Copyright from '../../components/copyright/Copyright'
import FaqInfo from '../../components/faqInfo/FaqInfo'
import Footer from '../../components/footer/Footer'
import MiniNav from '../../components/miniNav/MiniNav'
import Navbar from '../../components/navbar/Navbar'
import PricingInfo from '../../components/pricingInfo/PricingInfo'
import PricingInfo1 from '../../components/pricingInfo/PricingInfo1'
import PricingInfo2 from '../../components/pricingInfo/PricingInfo2'
import './pricing.css'

const Pricing = () => {
  return (
    <div id='Pricing'>
      <Navbar />
      <MiniNav title='Pricing' />
      
      <div className='Pc_Cont'>
        <PricingInfo />
        <PricingInfo1 />
        <PricingInfo2 />
      </div>


      <FaqInfo />

      <Footer />
      <Copyright />
      <ArrowUp href='#Pricing' />
    </div>
  )
}

export default Pricing