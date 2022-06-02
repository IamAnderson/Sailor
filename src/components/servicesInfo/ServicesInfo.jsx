import React from 'react'
import ServicesCard from './ServicesCard'
import { ServicesCardData } from './ServicesCardData'
import './servicesInfo.css'

const ServicesInfo = () => {
  return (
    <div className='SI'>
        <div className='SI_Cont'>
            {ServicesCardData.map((item) => {
              return(
                <ServicesCard id={item.id} Title={item.Title} Desc={item.Desc} Icon = {item.Icon} />
              )
            })}
        </div>
    </div>
  )
}

export default ServicesInfo