import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowUp } from 'react-icons/ai'


const Container = styled.div`
    position: fixed;
    bottom: 1vw;
    right: 2vw;

    @media screen and (height: 663px){
        display: none;
    }
`

const NavArrow = styled.a`
    
`

const ArrowUp = ({ href }) => {
  return (
    <Container style={{width: '2.5rem', height: '2.5rem', borderRadius: '5px', backgroundColor: '#d9232d', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <NavArrow href={href}>
            <AiOutlineArrowUp style={{textDecoration: 'none', color: '#fff', fontSize: '1.15rem'}} />
        </NavArrow>
    </Container>
  )
}

export default ArrowUp