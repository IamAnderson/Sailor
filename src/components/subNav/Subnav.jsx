import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    height: 12rem;
    width: 12rem;
    
    background-color: #fff;
    box-shadow: 1px 1px 8px #000;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SbMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;
`

const SbLink = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  color: #000;
  padding: 1.3rem 0;
  z-index: 10;

  &:hover{
    color: #d9232d;
  }
`

const Subnav = () => {
  return (
    <Container>
      <SbMenu>
        <SbLink to='/About'>
          About
        </SbLink>

        <SbLink to='/Teams'>
          Teams
        </SbLink>

        <SbLink to='/Testimonials'>
          Testimonials
        </SbLink>
      </SbMenu>
    </Container>
  )
}

export default Subnav