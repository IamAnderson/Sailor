import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { PortfolioData } from './PortfolioData'
import Fullimg from '../fullImg/Fullimg'



const TextBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  bottom: 0;
  left: 0;
  opacity: 0;
  background-color: #8080807a;
  width: 100%;
  height: 100%;
  z-index: 3;
`

const Container = styled.div`
    position: relative;

    &:hover{
      transform: scale(110%);
      transition: 0.25s all ease;
    }
    &:hover ${TextBox}{
      opacity: 1;
      transition: 0.25s all ease 0.25s;
    }

      &:active{
      transform: scale(110%);
      transition: 0.25s all ease;
      }
      &:active ${TextBox}{
        opacity: 1;
        transition: 0.25s all ease 0.25s;
      }
`

const ImgBox = styled.div`
  width: 25vw;


  &:hover{
    transform: scale(110%);
  }

  @media screen and (max-width: 985px){
    width: 35vw;
  }

  @media screen and (max-width: 500px){
    width: 85vw;
  }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`



const TextTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
`

const Description = styled.h4`
  color: #ffffffb2;
  //color: #000;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0.5rem;
  font-style: italic;
`

const IconBox = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  font-size: calc(0.8rem + 0.75vw);
  color: #ffffffb2;
  cursor: pointer;
  margin: 0 0.75rem 0 0;
  z-index: 99;
  //color: #000;
`

const Icon1 = styled.div`
  font-size: calc(0.8rem + 0.75vw);
  color: #ffffffb2;
  cursor: pointer;
  margin: 0 0.75rem 0 0;
  z-index: 99;
  //color: #000;
`



const PortfolioCard = () => {


const [expandImg, setExpandImg] = useState(false);
const showImg = () => {
  setExpandImg(!expandImg);
  console.log('It is working fGs')
};


  return (
    <>
      {PortfolioData.map((item) => {
        return(
          <Container id={item.id}>
            <ImgBox>
              <Image src={item.img} alt='portfolio' />
            </ImgBox>

            <TextBox>
              <TextTitle>
                {item.Title}
              </TextTitle>

              <Description>
                {item.Desc}
              </Description>

              <IconBox>
                <Icon onClick={showImg}>
                  { <item.Icon1 /> }
                </Icon>
                
                <Icon1>
                { <item.Icon2 /> }
                </Icon1>
              </IconBox>
            </TextBox>
          </Container>
        )
      })} 
      
    </>
  )
}

export default PortfolioCard