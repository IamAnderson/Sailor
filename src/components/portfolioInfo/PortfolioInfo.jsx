import React from 'react'
import PortfolioCard from './PortfolioCard'
import './portfolioInfo.css'

const PortfolioInfo = () => {

  return (
    <div className='PI'>
        <div className='PI_Cont'>
          <div className='PI_Selector'>
                  <p>ALL</p>
                  <p>APP</p>
                  <p>CARD</p>
                  <p>WEB</p>
              </div>

            <div className='PI_ImgCont'>
              <PortfolioCard />
            </div>
        </div>
    </div>
  )
}

export default PortfolioInfo
