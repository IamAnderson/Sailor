import React from 'react'
import AboutInfo from '../../components/aboutInfo/AboutInfo'
import ArrowUp from '../../components/arrowUp/ArrowUp'
import Copyright from '../../components/copyright/Copyright'
import Footer from '../../components/footer/Footer'
import MiniNav from '../../components/miniNav/MiniNav'
import Navbar from '../../components/navbar/Navbar'
import TeamInfo from '../../components/teamInfo/TeamInfo'
import './about.css'

const About = () => {
  return (
    <div id='About'>
      <Navbar />
      <MiniNav title='About' />
      <AboutInfo />
      <TeamInfo />
      <Footer />
      <Copyright />
      <ArrowUp href='#About' />
    </div>
  )
}

export default About