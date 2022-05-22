import React from 'react'
import ArrowUp from '../../components/arrowUp/ArrowUp'
import Copyright from '../../components/copyright/Copyright'
import Footer from '../../components/footer/Footer'
import MiniNav from '../../components/miniNav/MiniNav'
import Navbar from '../../components/navbar/Navbar'
import PortfolioInfo from '../../components/portfolioInfo/PortfolioInfo'
import './portfolio.css'

const Portfolio = () => {
  return (
    <div id='Portfolio'>
      <Navbar />
      <MiniNav title='Portfolio'/>
      <PortfolioInfo />
      <Footer />
      <Copyright />
      <ArrowUp href='#Portfolio' />
    </div>
  )
}

export default Portfolio