import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './home.css'
import { HomeData } from './HomeData'
import Brand from '../../components/brand/Brand'
import AboutInfo from '../../components/aboutInfo/AboutInfo'
import ServicesInfo from '../../components/servicesInfo/ServicesInfo'
import PortfolioInfo from '../../components/portfolioInfo/PortfolioInfo'
import Footer from '../../components/footer/Footer'
import ArrowUp from '../../components/arrowUp/ArrowUp'
import Copyright from '../../components/copyright/Copyright'

const Home = ({slides}) => {

const [current, setCurrent] = useState(0);
const length = slides.length;

let autoSlide = true;
let slideInterval;

const prevbtn = () => {
  setCurrent(current === 0 ? length - 1 : current - 1);
};

const nxtbtn = () => {
  setCurrent(current === length - 1 ? 0 : current + 1); 
};


function auto() {
  slideInterval = setInterval(nxtbtn, 7000);
}

useEffect(() => {
  if(autoSlide){
    auto()
  }
  return() => clearInterval(slideInterval);
}, [current])


  return (
    <div className='Hm' id='Home'>
      <Navbar />

      <div className='Hm_SlideCont'>
        <div className='Hm_Arrow'>
          <AiOutlineArrowLeft className='Ar_Left' onClick={prevbtn}/>
          <AiOutlineArrowRight className='Ar_Right' onClick={nxtbtn}/>
        </div>

        {HomeData.map((item, index) => {
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                  {index === current && (
                    <div className='Hm_Slide' key={item.id}>
                    <div className='Hm_SlideImg'>
                      <img src={item.img} alt='slide'/>
                    </div>

                    <div className='Hm_SliderContent'>
                      <div className='Hm_Title'>
                        {item.title}
                      </div>

                      <div className='Hm_Texts'>
                        <p> {item.p1} </p>           
                        <p> {item.p2} </p>
                      </div>

                      <div className='Hm_Btn'>
                          <button>
                              <a href='#ReadMore' style={{color: '#fff', textDecoration: 'none', fontSize: '15px'}}>
                                  READ MORE
                              </a>
                          </button>
                      </div>
                    </div>
                    </div>
                  )}      
                </div>
              )
        })}

      </div>

      <AboutInfo />

      <Brand />

      <ServicesInfo />

      <PortfolioInfo />

      <Footer />

      <Copyright />

      <ArrowUp href='#Home' />
    </div>
  )
}

export default Home