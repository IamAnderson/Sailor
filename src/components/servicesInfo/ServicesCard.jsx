import React from 'react'
import styled from 'styled-components'
import { BsBriefcase } from 'react-icons/bs'


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem 0rem;
    background-color: #f8f9fa;
`

const CardIcon = styled.div`
    flex: 0.25;
    text-align: center;
    font-size: 2rem;
    color: #d9232d;
`

const CardContent = styled.div`
    flex: 1;
    display: flex;
    text-align: start;
    flex-direction: column;
    justify-content: center;
`

const CardTitle = styled.a`
    font-size: 18px;
    color: #556270;
    padding: 0 0 0.5rem 0;
    text-decoration: none;

    &:hover{
        color: #d9232d;
    }
`

const CardDesc = styled.p`
    font-size: 14px;
    color: #444444;
    line-height: 1.5;
    padding: 0.5rem 0;
`

const ServicesCard = ({id, Title, Desc, Icon}) => {
  return (
    <Container id={id}>
        <CardIcon>
            { <Icon /> }
        </CardIcon>

        <CardContent>
            <CardTitle href='#Home'>
                {Title}
            </CardTitle>

            <CardDesc>
                {Desc}
            </CardDesc>
        </CardContent>

    </Container>
  )
}

export default ServicesCard