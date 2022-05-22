import React from 'react'
import './brand.css'
import { brand1, brand2, brand3, brand4, brand5, brand6 } from '../brand/brandImg'

const Brand = () => {
  return (
    <div className='Br_LogoCont'>
        <div className='Br_Logo'>
            <img  src={brand1} alt='clients' />
        </div>

        <div className='Br_Logo'>
            <img  src={brand2} alt='clients' />
        </div>

        <div className='Br_Logo'>
            <img  src={brand3} alt='clients' />
        </div>

        <div className='Br_Logo'>
            <img  src={brand4} alt='clients' />
        </div>

        <div className='Br_Logo'>
            <img  src={brand5} alt='clients' />
        </div>

        <div className='Br_Logo'>
            <img  src={brand6} alt='clients' />
        </div>
  </div>
  )
}

export default Brand