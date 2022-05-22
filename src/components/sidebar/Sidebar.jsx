import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaArrowDown } from 'react-icons/fa'
import './sidebar.css'
import Subnav from '../subNav/Subnav'


const Container = styled.div`
  background-color: #008080b9;
  height: 100vh;
  width: 100vw;
  

  
  position: fixed;
  top: 0;
  right: 0;

  @media screen and (min-width: 985px){
    display: none;
  }
`

const SbMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  height: 80vh;
  width: 80vw;
  padding: 2rem 1rem;
  background-color: #fff;
  z-index: 12;

  position: fixed;
  top: 10%;
  right: 10%;
`

const About = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0 1rem 1rem;
  z-index: 13;
`

const SbSubnav = styled.div`
  position: absolute;
  
  z-index: 13;
`

const Sidebar = () => {


  const [subnav, setSubnav] = useState(false);
  const toggleSubnav = () => setSubnav(!subnav);


  return (
    <Container>
      <SbMenu>
        <NavLink to='/' className='Sb_Link'>
          Home
        </NavLink>

        <About to='' className='Nb_Link About' onClick={toggleSubnav}>
            About <FaArrowDown style={{color: '#555270', fontSize: '10px'}}/>
            {subnav && (
                <SbSubnav>
                    <Subnav length='false'/>
                </SbSubnav>
            )}                    
        </About>

        <NavLink to='/Services' className='Sb_Link'>
          Services
        </NavLink>

        <NavLink to='/Portfolio' className='Sb_Link'>
          Portfolio
        </NavLink>

        <NavLink to='/Pricing' className='Sb_Link'>
          Pricing
        </NavLink>

        <NavLink to='/Blog' className='Sb_Link'>
          Blog
        </NavLink>

        <NavLink to='/Contact' className='Sb_Link'>
          Contact
        </NavLink>
      

      <div className='Sb_Btn'>
          <button>
              <NavLink to='/SignUp' style={{color: '#fff', textDecoration: 'none', fontSize: '15px'}}>
                  Get Started
              </NavLink>
          </button>
      </div>

      </SbMenu>
    </Container>
  )
}

export default Sidebar