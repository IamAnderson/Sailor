import React from 'react'
import ArrowUp from '../../components/arrowUp/ArrowUp'
import Copyright from '../../components/copyright/Copyright'
import Footer from '../../components/footer/Footer'
import MiniNav from '../../components/miniNav/MiniNav'
import Navbar from '../../components/navbar/Navbar'
import TeamInfo from '../../components/teamInfo/TeamInfo'
import './teams.css'

const Teams = () => {
  return (
    <div id='Teams'>
      <Navbar />
      <MiniNav title='Teams' />
      <TeamInfo />
      <Footer />
      <Copyright />
      <ArrowUp href='#Teams'/>
    </div>
  )
}

export default Teams