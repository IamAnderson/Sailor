import React from 'react'
import './copyright.css'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Copyright = () => {
  return (
    <div className='Ct'>
         <div className='Ct_Container'>
            <div className='Ct_Text'>
                © Copyright Sailor. All Rights Reserved
            </div>

            <div className='Ct_Dev'>
                Designed by Andy 

                <div className='Socials'>
                    <Link to='/' className='Socials_Icon' target='_blank' style={{textDecoration: 'none'}}>
                        <AiFillLinkedin />
                    </Link>

                    <Link to='/' className='Socials_Icon' target='_blank' style={{textDecoration: 'none'}}>
                        <AiFillGithub/>
                    </Link>

                    <Link to='/' className='Socials_Icon' target='_blank' style={{textDecoration: 'none'}}>
                        <AiFillTwitterSquare />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Copyright