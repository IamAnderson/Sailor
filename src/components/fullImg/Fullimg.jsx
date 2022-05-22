import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import img from '../../assets/img/portfolio/portfolio-1.jpg'


const Container = styled.div`
    position: fixed;
    background-color: #000;
    width: 100vw;
    height: 100vw;
    display: flex;
    justify-content: center;
    top: 0;
    right: ${({showImg}) => (showImg ? '50%' : '-1000%')};
    z-index: 13;
`

const Icon = styled.div`
    position: absolute;
    top: 20%;
    right: 0;
    z-index: 18;
`

const ImgCont = styled.div`
    width: 50vw;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`


const Fullimg = ({ expandImg, showImg }) => {
  return (
    <Container>
        <Icon onClick={showImg}>
            <FaTimes style={{fontSize: '2rem', color:'#fff', cursor:'pointer'}} />
        </Icon>
        <ImgCont>
            <Image src={img} alt='portfolio'/>
        </ImgCont>
    </Container>
  )
}

export default Fullimg