import React from 'react'
import styled from 'styled-components'
import TeamInfoCard from './TeamInfoCard'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 8rem;
    background-color: #f8f9fa;
    margin-top: 6rem;

    @media screen and (max-width: 985px){
        padding: 4rem 2rem;
        margin-top: 3rem;
    }
`

const IntroCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h3`
    font-size: 15px;
    font-weight: 400;
    color: #aaaaaa;
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
`

const Desc = styled.h1`
    font-size: 36px;
    color: #556270;
`

const TeamCont = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    grid-gap: 2rem;


    
    @media screen and (max-width: 985px){
        grid-template-columns: 1fr;
    }
`


const TeamInfo = () => {
  return (
    <Container>
            <IntroCont>
                <Title>
                    TEAM<p style={{color: '#d9232d', paddingLeft: '0.25rem', fontSize: '10px'}}>---------------------</p> 
                </Title>

                <Desc>
                    OUR HARDWORKING TEAM
                </Desc>
            </IntroCont>

        <TeamCont>
            <TeamInfoCard />
        </TeamCont>
    </Container>
  )
}

export default TeamInfo