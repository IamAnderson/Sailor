import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TeamInfoData } from './TeamInfoData'


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
`

const ImgBox = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;


    
    @media screen and (max-width: 600px){
        width: 13rem;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    transform: scale(80%);
    object-fit: contain;
    border-radius: 10px;

    &:hover{
        transform: scale(82%);
        transition: 0.25s all ease;
    }

    @media screen and (max-width: 600px){
     transform: scale(75%);
    }
`

const InfoBox = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;


    @media screen and (max-width: 600px){
        flex: 1;
    }
`

const InfoTitle = styled.h1`
    font-size: 20px;
    color: #556270;
    padding-bottom: 0.5rem;


    @media screen and (max-width: 600px){
        font-size: 18px;
    }

    @media screen and (max-width: 450px) {
        padding-bottom: 0.25rem;
    }
`

const InfoDesc = styled.p`
    font-size: 15px;
    color: #444444;
    padding-bottom: 0.5rem;


    @media screen and (max-width: 600px){
        font-size: 14px;
    }

    @media screen and (max-width: 450px) {
        padding-bottom: 0.25rem;
    }
`

const Line = styled.div`
    width: 3rem;
    height: 0.01rem;
    background-color: #dee2e6;
    margin: 0.5rem 0;
`

const InfoText = styled.p`
    font-size: 15px;
    color: #444444;


    @media screen and (max-width: 600px){
        font-size: 14px;   
    }
`

const InfoSocials = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Icon1 = styled(Link)`
    color: #fff;
    background-color: #8795a4;
    margin: 1rem 0.25rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    border-radius: 4px;
    align-items: center;
    text-decoration: none;

    &:hover{
        background-color: #d9232d;
        transition: 0.35s all ease;
    }


    
    @media screen and (max-width: 450px) {
        margin: 0.5rem 0.5rem 0 0;
    }
`

const Icon2 = styled(Link)`
    color: #fff;
    background-color: #8795a4;
    margin: 1rem 0 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    border-radius: 4px;
    text-decoration: none;

    &:hover{
        background-color: #d9232d;
        transition: 0.35s all ease;
    }

    @media screen and (max-width: 450px) {
        margin: 0.5rem 0 0 0.5rem;
    }
`


const TeamInfoCard = () => {
  return (
    <>
        {TeamInfoData.map((item) => {
            return(
                <Container id={item.id}>
                    <ImgBox>
                        <Image src={item.img} alt='team' />
                    </ImgBox>
            
                    <InfoBox>
                        <InfoTitle>
                            {item.Title}
                        </InfoTitle>
            
                        <InfoDesc>
                            {item.Desc}
                        </InfoDesc>
            
                        <Line />
            
                        <InfoText>
                            {item.Text}
                        </InfoText>
            
                        <InfoSocials>
                            <Icon1 to='/'>
                                <FaTwitter />
                            </Icon1>
            
                            <Icon2 to='/'>
                                <FaInstagram />
                            </Icon2>
                        </InfoSocials>
            
                    </InfoBox>
                </Container>
            )   
        })}
    </>
  )
}

export default TeamInfoCard