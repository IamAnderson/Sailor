import React from 'react'
import styled from 'styled-components'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FaqData } from './FaqData'

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

const FaSection = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 4rem 0 0 0;

  @media screen and (max-width: 985px){
    flex-direction: column;
    align-items: flex-start;
  }
`

const Question = styled.p`
  flex: 1;
  color: #444444;
  font-weight: 600;
  font-size: 16px;
`

const Answer = styled.p`
  flex: 1.16;
  color: #444444;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;

  
  @media screen and (max-width: 985px){
    padding-top: 1rem;
  }
`

const FaqInfo = () => {
  return (
    <Container>
        <Title>
          F.A.Q <Line />
        </Title>

        <Desc>
          FREQUENTLY ASKED QUESTIONS
        </Desc>

        {FaqData.map((item) => {
          return(
            <FaSection key={item.id}>
              <Question>
                <AiOutlineQuestionCircle style={{color: '#aaaaaa'}}/> {item.que}
              </Question>
    
              <Answer>  
                {item.ans}
              </Answer>
            </FaSection>
          )
        })}
    </Container>
  )
}

export default FaqInfo