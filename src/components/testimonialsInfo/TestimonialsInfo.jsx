import React from 'react'
import styled from 'styled-components'
import { TestimonialsData } from './TestimonialsData'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    box-shadow: 1px 1px 10px #9999993d;
`

const InfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`

const ImageSection = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
    height: 100%;

`

const InfoCont = styled.div`
    display: flex;
    padding: 0 0 0 1rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const Name = styled.h4`
    color: #111111;
    font-size: 18px;
    font-weight: 500;
`

const Title = styled.h3`
    color: #999999;
    font-size: 14px;
    font-weight: 400;
    padding: 0.5rem 0 0 0;
`

const TextSection = styled.div`
    
`

const Text = styled.p`
    color: #444444;
    font-size: 15px;
    line-height: 1.5;
    font-style: italic;
`


const TestimonialsInfo = () => {
  return (
    <>
        {TestimonialsData.map((item) => {
            return(
                <>
                    <Container key={item.id}>
                        <InfoSection>
                        <ImageSection>
                            <Image src={item.img} alt='testimonials' />
                        </ImageSection>
                    
                        <InfoCont>
                            <Name>
                                {item.Name}
                            </Name>

                            <Title>
                                {item.Title}
                            </Title>
                        </InfoCont>
                        </InfoSection>
                        
                        <TextSection>
                            <Text>
                                {item.text}
                            </Text>
                        </TextSection>
                    </Container>
                </>
            )
        })}            
    </>
  )
}

export default TestimonialsInfo