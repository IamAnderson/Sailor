import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Ft'>
        <div className='Ft_Cont'>
            <div className='Ft_FirstBox'>
                <div className='Ft_Logo'>
                    Sailor
                </div>

                <div className='Ft_FirstList'>
                    <p>A108 Adam Street</p>
                    <p>NY 535022, USA</p>
                    <p><b>Phone:</b> +1 234 55678</p>
                    <p><b>Email:</b>info@gmail.com</p>
                </div>
            </div>

            <div className='Ft_SecondBox'>
                <div className='Ft_Title'>
                    Useful Links 
                </div>

                
                <div className='Ft_List'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>

            <div className='Ft_SecondBox'>
                <div className='Ft_Title'>
                    Our Services 
                </div>

                <div className='Ft_List'>
                    <p>Web Design</p>
                    <p>Web Development</p>
                    <p>Product Manager</p>
                    <p>Marketing</p>
                    <p>Stuffs</p>
                </div>
            </div>

            <div className='Ft_ThirdBox'>
                <div className='Ft_Newsletter'>
                    Our NewsLetter
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, enim!</p>

                <div className='Ft_NLBox'>
                    <input placeholder='email:' />
                    <Link to='/'>
                        <button>Subscribe</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer