import React, { useState } from 'react'
import styled from 'styled-components'
import { FeaturesData } from './FeaturesData'


const Container = styled.div`
    padding: 4rem 8rem;


    @media screen and (max-width: 985px){
      padding: 4rem 2rem;
    }
`

const Title = styled.h3`
  display: flex;
  align-items: center;
  color: #aaaaaa;
  font-size: 14px;
`

const Line = styled.div`
  width: 7rem;
  height: 1px;
  margin-left: 1rem;
  border: 1px solid #e6636a;
`

const Desc = styled.h1`
  color: #556270;
  font-size: 36px;
  margin-top: 0.5rem;
`

const FtSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3rem 0 0 0;


  @media screen and (max-width: 985px){
    flex-direction: column;
    align-items: center;
  }
`

const FtTitleBox = styled.div`
  flex: 0.25;
  margin-right: 1rem;

  @media screen and (max-width: 985px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`

const FtTitle = styled.h4`
  color: #556270;
  font-size: 15px;
  padding: 0.75rem 0;
  cursor: pointer;

  &:hover{
    color: #d9232d;
    transition: 0.25s all ease;
  }

  &:active{
    color: #d9232d;
    border-right: 3px solid #d9232d;
    transition: 0.1s all ease;
  }

  @media screen and (max-width: 985px){
 
    &:active{
      color: #fff;
      background-color: #d9232d;
      width: 100%;
      padding: 0.75rem;
      transition: 0.1s all ease;
    }
  }
`

const FtDisplay = styled.div`
  flex: 0.75;
  display: flex;
  align-items: flex-start;


  @media screen and (max-width: 985px){
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`

const FtDLeft = styled.div`
  flex: 0.75;
`

const FdTitle = styled.h3`
  color: #556270;
  font-size: 26px;
  padding: 0 0 1rem 0;
`

const FdDesc = styled.p`
  color: #777777;
  font-size: 16px;
  font-style: italic;
  line-height: 1.5;
  padding: 0 0 1rem 0;
`

const FdText = styled.p`
  color: #777777;
  font-size: 16px;
  line-height: 1.5;
`

const FtDRight = styled.div`
  flex: 0.25;
  width: 22rem;

  @media screen and (max-width: 985px){
    padding: 1rem 0;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`


const FeaturesInfo = ({ Slides }) => {

const [current, setCurrent] = useState(0);
const Length = Slides.length

const firstBtn = () => {
  setCurrent(current === 0 ? 0 : 0);
}

const secondBtn = () => {
  setCurrent(current === 0 ? 1 : 1);
}

const thirdBtn = () => {
  setCurrent(current === 0 ? 2 : 2)
}

const fourthBtn = () => {
  setCurrent(current === 0 ? 3 : 3)
}

const fifthBtn = () => {
  setCurrent(current === 0 ? 4 : 4)
}
  return (
    <Container>
        <Title>
          Features <Line />
        </Title>

        <Desc>
          CHECK OUR FEATURES
        </Desc>

        <FtSection>
          <FtTitleBox>
            <FtTitle onClick={firstBtn}>
              Modi sit est
            </FtTitle>

            <FtTitle onClick={secondBtn}>
              Unde praesentium sed
            </FtTitle>

            <FtTitle onClick={thirdBtn}>
              Lorem ipsum dolor
            </FtTitle>

            <FtTitle onClick={fourthBtn}>
              Sit amet consectetur
            </FtTitle>

            
            <FtTitle onClick={fifthBtn}>
              Pariatur explicabo vel
            </FtTitle>
          </FtTitleBox>
          <FtDisplay>
          {FeaturesData.map((item, index) => {
            return(
                  <div className={index === current ? 'slides active' : 'slides'} key={index}>
                    {index === current && (
                        <FtDisplay>
                            <FtDLeft>
                            <FdTitle>
                              {item.title}
                            </FdTitle>
          
          
                            <FdDesc>
                              {item.desc}
                            </FdDesc>
          
                            <FdText>
                              {item.text}
                            </FdText>
                          </FtDLeft>
          
                          <FtDRight>
                            <Image src={item.img} alt='Features' />
                          </FtDRight>
                        </FtDisplay>
                    )}
                  </div>          
            )
          })}
          </FtDisplay>
        </FtSection>
    </Container>
  )
}

export default FeaturesInfo