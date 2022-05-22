import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import styled from 'styled-components'
import { FaArrowDown, FaBars, FaTimes } from 'react-icons/fa'
import Subnav from '../subNav/Subnav'
import Sidebar from '../sidebar/Sidebar'


const About = styled(NavLink)`
    position: relative;
    z-index: 10;
    &:hover{
        
    }
`

const NbSubnav = styled.div`
    position: absolute;
    top: 3.5vw;
    left: -4vw;
    z-index: 10;
`

const Navbar = () => {

const [subnav, setSubnav] = useState(false);
const toggleSubnav = () => setSubnav(!subnav);


const [sidebar, setSidebar] = useState(false);
const showSidebar = () => setSidebar(!sidebar);


  return (
    <div className='Nb'>
        <div className='Nb_Container'>
            <div className='Nb_Logo'>
                SAILOR
            </div>
            <div className='Nb_Menu'>
                <NavLink to='/' className='Nb_Link'>
                    Home
                </NavLink>

                <About to='' className='Nb_Link About' onMouseLeave={toggleSubnav}>
                    About <FaArrowDown style={{color: '#555270', fontSize: '10px'}}/>
                    {subnav && (
                        <NbSubnav>
                            <Subnav length={true}/>
                        </NbSubnav>
                    )}                    
                </About>

                <NavLink to='/Services' className='Nb_Link'>
                    Services
                </NavLink>

                <NavLink to='/Portfolio' className='Nb_Link'>
                    Portfolio
                </NavLink>

                <NavLink to='/Pricing' className='Nb_Link'>
                    Pricing
                </NavLink>

                <NavLink to='/Blog' className='Nb_Link'>
                    Blog
                </NavLink>

                <NavLink to='/Contact' className='Nb_Link'>
                    Contact
                </NavLink>
            </div>

            <div className='Nb_Btn'>
                <button>
                    <NavLink to='/' style={{color: '#fff', textDecoration: 'none', fontSize: '15px'}}>
                        Get Started
                    </NavLink>
                </button>
            </div>

            <div className='Sb_Icon'>
                {sidebar ? <FaTimes onClick={showSidebar}/> : <FaBars onClick={showSidebar}/>}
            </div>
        </div>

        {sidebar && (
            <Sidebar />
        )}
    </div>
  )
}

export default Navbar