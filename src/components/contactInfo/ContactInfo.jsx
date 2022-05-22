import React from 'react'
import styled from 'styled-components'
import { FaLocationArrow, FaPhone } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Container = styled.div`
    padding: 4rem 8rem;

    display: flex;
    align-items: flex-start;
    justify-content: center;


    @media screen and (max-width: 985px) {
      padding: 4rem 2rem;

      flex-direction: column;
      align-items: flex-start;
    }
`

const LeftSection = styled.div`
  flex: 0.35;
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2rem 0;
`

const ContactTitle = styled.h3`
  color: #556270;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 0.5rem;


  display: flex;
  align-items: center;
`

const IconSpot = styled.div`
  margin-right: 1rem;
`

const ContactDesc = styled.h4`
  color: #8795a4;
  font-size: 14px;
  font-weight: 400;
`

const RightSection = styled.div`
  flex: 0.65;

  @media screen and (max-width: 985px) {
    width: 100%;
  }
`

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const InputTop = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  width: 100%;
`

const NameInput = styled.input`
  padding: 1rem;
  width: 50%;
  border: 1px solid #aaaaaa;
  margin-right: 1rem;
`

const EmailInput = styled.input`
  padding: 1rem;
  width: 50%;
  border: 1px solid #aaaaaa;
  margin-left: 1rem;
`

const InputMid = styled.div`
  padding: 2rem 0;
`

const SubjectInput = styled.input`
  padding: 1rem;
  width: 100%;
  border: 1px solid #aaaaaa;
`

const InputFinal = styled.div`
  padding: 2rem 0;
`

const MessageInput = styled.input`
  padding: 3rem 1rem;
  width: 100%;
  border: 1px solid #aaaaaa;
`

const BtnSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  background-color: #d9232d;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 4px;

  padding: 1rem 1.5rem;
`


const ContactInfo = () => {
  return (
    <Container>
        <LeftSection>
          <LeftSide>
            <ContactTitle>
              <IconSpot style={{backgroundColor: '#edeff1', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', justifyContent:'center', alignItems: 'center'}}><FaLocationArrow style={{fontSize: '15 px'}}/></IconSpot> Location:
            </ContactTitle>

            <ContactDesc>
              A108 Adam Street, New York, NY 535022
            </ContactDesc>
          </LeftSide>

          <LeftSide>
            <ContactTitle>
              <IconSpot style={{backgroundColor: '#edeff1', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', justifyContent:'center', alignItems: 'center'}}><AiOutlineMail style={{fontSize: '15 px'}}/></IconSpot> Email:
            </ContactTitle>

            <ContactDesc>
              @email.gmail.com
            </ContactDesc>
          </LeftSide>

          <LeftSide>
            <ContactTitle>
              <IconSpot style={{backgroundColor: '#edeff1', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', justifyContent:'center', alignItems: 'center'}}><FaPhone style={{fontSize: '15 px'}}/></IconSpot> Call:
            </ContactTitle>

            <ContactDesc>
              + 1 123 3456
            </ContactDesc>
          </LeftSide>
        </LeftSection>

        <RightSection>
          <InputSection>
            <InputTop>
              <NameInput placeholder='Name' />
              <EmailInput placeholder='Your Email' />
            </InputTop>

            <InputMid>
              <SubjectInput placeholder='Subject' />
            </InputMid>

            <InputFinal>
              <MessageInput placeholder='Message' />
            </InputFinal>
          </InputSection>
          
          <BtnSection>
            <Button>
              <Link to='/Contact' style={{color: '#fff', fontSize: '16px', textDecoration: 'none'}}>
                Send Message
              </Link> 
            </Button>
          </BtnSection>
        </RightSection>
    </Container>
  )
}

export default ContactInfo