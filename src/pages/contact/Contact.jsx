import React from 'react'
import ArrowUp from '../../components/arrowUp/ArrowUp'
import ContactInfo from '../../components/contactInfo/ContactInfo'
import Copyright from '../../components/copyright/Copyright'
import Footer from '../../components/footer/Footer'
import MiniNav from '../../components/miniNav/MiniNav'
import Navbar from '../../components/navbar/Navbar'
import './contact.css'

const Contact = () => {
  return (
    <div id='Contact'>
      <Navbar />
      <MiniNav title='Contact' />
      <ContactInfo />
      <Footer />
      <Copyright />
      <ArrowUp href='#Contact' />
    </div>
  )
}

export default Contact