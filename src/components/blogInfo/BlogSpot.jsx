import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BlogData } from './BlogData'


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    box-shadow: 1px 1px 3px #999999;
    margin: 4rem 0;
`

const ImgSection = styled.div`
    width: 100%;
    height: 425px;
`

const BlogSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover ;
`

const BlogTitle = styled.div`
    font-size: 28px;
    color: #556270;
    font-weight: 600;
    margin-top: 2rem;
`

const ClientInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 1rem 0;
`

const Name = styled.p`
    font-size: 15px;
    color: #777777;
    padding: 0 1rem 0 0;
`

const Date = styled.p`
    font-size: 15px;
    color: #777777;
    padding: 0 1rem 0 1rem;
`

const Comment = styled.p`
    font-size: 15px;
    color: #777777;    
    padding: 0 1rem 0 1rem;
`

const BlogInfo = styled.p`
    font-size: 16px;
    color: #444444;
    line-height: 1.5;
`

const BtnSection = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 90%;
    padding-top: 1rem;
`

const Button = styled.button`
    color: #fff;
    background-color: #d9232d;
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 0.75rem 1.25rem;
`


const BlogSpot = () => {
  return (
    <>
        {BlogData.map((item) => {
            return(
                <Container id={item.id}>
                    <ImgSection>
                        <Image src={item.img} alt='Blog' />
                    </ImgSection>
            
                    <BlogSection>
                        <BlogTitle>
                            {item.title}
                        </BlogTitle>
            
                        <ClientInfo>
                            <Name>
                                {item.Name}
                            </Name>
            
                            <Date>
                                {item.Date}
                            </Date>
            
                            <Comment>
                                {item.Comment}
                            </Comment>
                        </ClientInfo>
            
                        <BlogInfo>
                            {item.Info}
                        </BlogInfo>
                        
                        <BtnSection>
                            <Button>
                                <Link to='/BlogSingle' style={{textDecoration: 'none', color: '#fff', fontSize: '15px', fontWeight: '400'}}>
                                    Read More
                                </Link>
                            </Button>
                        </BtnSection>
            
                    </BlogSection>
                </Container>
            )
        })}
    </>
  )
}

export default BlogSpot