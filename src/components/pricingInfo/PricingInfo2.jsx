import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PricingData } from '../../pages/pricing/PricingData'



const Container = styled.div`
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    width: 15rem;
    border: 1px solid #f8f8f8;

    @media screen and (max-width: 985px) {
        width: calc(14rem + 8vw);
    }

    @media screen and (max-width: 650px) {
        width: calc(14rem + 8vw);
    }
`


const PcTitle = styled.h1`
    color: #fff;
    padding: 1rem 4rem;
    font-size: 16px;
    background-color: #d9232d;
    padding: 1rem 0.75rem;
    border-radius: 5px;
    text-align: center;
`

const PcInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 2rem;
`

const PcPrice = styled.h2`
    color: #d9232d;
    display: flex;
    align-items: center;
    font-size: 36px;
    padding: 1rem 0;
`

const PcText = styled.p`
    color: #444444;
    padding: 0.5rem 0;
    font-size: 14px;
`

const PcTextNull = styled.p`
    color: #444444;
    text-decoration: none;
    padding: 0.5rem 0;
    font-size: 14px;
`

const PcTextNull1 = styled.p`
    color: #444444;
    text-decoration: none;
    padding: 0.5rem 0;
    font-size: 14px;
`

const Btn = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Link = styled(NavLink)`
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    background-color: #d9232d;
    padding: 1rem;
    border-radius: 5px;
`


const PricingInfo2 = () => {
  return (
    <>
        {PricingData.map((item) => {
            return(
                    <Container key={item.id}>
                        <PcTitle>
                            {item.title}
                        </PcTitle>
                
                        <PcInfo>
                            <PcPrice>
                                {item.price} <p style={{color: '#b9b5b5', fontSize: '16px', paddingLeft: '0.25rem'}}>/ month</p>
                            </PcPrice>
                
                            <PcText>
                                Lorem ipsum
                            </PcText>
                
                            <PcText>
                                Lorem ipsum dolor
                            </PcText>
                
                            <PcText>
                                Lorem ipsum dolor sit
                            </PcText>
                
                            <PcTextNull>
                                Lorem ipsum
                            </PcTextNull>
                
                            <PcTextNull1>
                                Lorem ipsum dolor
                            </PcTextNull1>
                
                        </PcInfo>
                        
                        <Btn>
                            <Link to='/SignUp' style={{textDecoration: 'none'}}>
                                Buy Now
                            </Link>
                        </Btn>
                    </Container>
            )
        })}
    </>
  )
}

export default PricingInfo2