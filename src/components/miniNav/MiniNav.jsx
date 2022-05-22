import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f9fa;
    padding: 2rem 8.3rem;


    @media screen and (max-width: 985px){
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 2rem 2rem;
    }
`

const Title = styled.h1`
    color: #444444;
    font-size: 32px;
    font-weight: 400;
`

const Selector = styled.p`
    color: #444444;


    @media screen and (max-width: 985px){
      padding: 1rem 0 0 0;
    }
`


const MiniNav = ({ title }) => {
  return (
    <Container>
        <Title>
          {title}
        </Title>

        <Selector>
          <Link to='/' style={{textDecoration: 'none', color: '#d9232d'}}>Home</Link> / {title}
        </Selector>
    </Container>
  )
}

export default MiniNav