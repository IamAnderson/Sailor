import React from 'react'
import ArrowUp from '../../components/arrowUp/ArrowUp'
import Copyright from '../../components/copyright/Copyright'
import { FeaturesData } from '../../components/featuresInfo/FeaturesData'
import FeaturesInfo from '../../components/featuresInfo/FeaturesInfo'
import Footer from '../../components/footer/Footer'
import MiniNav from '../../components/miniNav/MiniNav'
import Navbar from '../../components/navbar/Navbar'
import ServicesInfo from '../../components/servicesInfo/ServicesInfo'
import './services.css'

const Services = () => {
  return (
    <div id='Services'>
      <Navbar />
      <MiniNav title='Services'/>
      <ServicesInfo />
      <FeaturesInfo Slides={FeaturesData}/>
      <Footer />
      <Copyright />
      <ArrowUp href='#Services'/>
    </div>
  )
}

export default Services