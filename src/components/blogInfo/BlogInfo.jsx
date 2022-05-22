import React from 'react'
import styled from 'styled-components'
import BlogSpot from './BlogSpot'
import { FaSearch } from 'react-icons/fa'
import { RCPData } from './BlogData'


const Container = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 4rem 8rem;

    @media screen and (max-width: 978px) {
        padding: 4rem 2rem;
        flex-direction: column;
    }
`

const BlogSection = styled.div`
    flex: 0.65;
    margin-right: 2rem;
`

const RightSection = styled.div`
    flex: 0.35;
    display: flex;
    justify-content: flex-end;
    padding: 4rem 0;
    margin-left: 2rem;
`

const Cont = styled.div`
    box-shadow: 1px 1px 3px #777777;
    padding: 2rem;
`

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const SearchTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #556270;
    padding: 0 0 1rem 0;
`

const Search = styled.div`
    display: flex;
    justify-content: center;
`

const SearchInput = styled.input`
    width: 12rem;
    height: 2.5rem;
    border: 1px solid #777777;
`

const IconBox = styled.div`
    padding: 0 0 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9232d;
    padding: 0 1rem;
`

const CategoriesBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.25rem 0 0 0;
`

const CategoriesTitle = styled.h3`
    font-size: 20px;
    color: #556270;
    font-weight: 600;
    padding: 1rem 0;
`

const Category = styled.p`
    font-size: 15px;
    color: #777777;
    display: flex;
    padding: 1rem 0;
`

const RecentPostBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const RCPTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #556270;
    padding: 1rem 0 0 0;
`

const RCP = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 1rem 0 0 0 ;
`

const RCPImg = styled.div`
    width: 8rem;
    margin-right: 1rem;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const RCPSpot = styled.div`
    display: flex;
    flex-direction: column;
`

const RTitle = styled.h3`
    color: #556270;
    font-size: 15px;
    padding: 1rem 0;
    cursor: pointer;
`

const RDate = styled.p`
    font-size: 14px;
    color: #aaaaaa;
`

const TagBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const TagTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #556270;
    padding: 2rem 0;
`

const TagMenu = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
`

const TagList = styled.p`
    font-size: 14px;
    color: #aaaaaa;
    padding: 1.2rem;
    cursor: pointer;
`


const BlogInfo = () => {
  return (
    <Container>
        <BlogSection>
            <BlogSpot />
        </BlogSection>

        <RightSection>
            <Cont>
                <SearchBox>
                    <SearchTitle>
                        Search
                    </SearchTitle>
                    <Search>
                        <SearchInput placeholder='' />
                        <IconBox>
                            <FaSearch />
                        </IconBox>
                    </Search>
                </SearchBox>

                <CategoriesBox>
                    <CategoriesTitle>
                        Categories
                    </CategoriesTitle>

                    <Category> 
                        General <div style={{fontSize: '14px', color: '#aaaaaa', paddingLeft: '0.5rem'}}>(41)</div>
                    </Category>

                    <Category>
                        Travel <div style={{fontSize: '14px', color: '#aaaaaa', paddingLeft: '0.5rem'}}>(11)</div>
                    </Category>

                    <Category>
                        Lifestyle <div style={{fontSize: '14px', color: '#aaaaaa', paddingLeft: '0.5rem'}}>(12)</div>
                    </Category>

                    <Category>
                        Education <div style={{fontSize: '14px', color: '#aaaaaa', paddingLeft: '0.5rem'}}>(8)</div>
                    </Category>

                    <Category>
                        Design <div style={{fontSize: '14px', color: '#aaaaaa', paddingLeft: '0.5rem'}}>(10)</div>
                    </Category>
                </CategoriesBox>

                <RecentPostBox>
                    <RCPTitle>
                        Recent Posts
                    </RCPTitle>
                    
                    {RCPData.map((item) => {
                        return(
                            <RCP id={item.id}>
                                <RCPImg>
                                    <Image src={item.img} alt ='' />
                                </RCPImg>

                                <RCPSpot>
                                    <RTitle>
                                        {item.title}
                                    </RTitle>

                                    <RDate>
                                        {item.date}
                                    </RDate>
                                </RCPSpot>
                            </RCP>
                        )
                    })}
                </RecentPostBox>

                <TagBox>
                    <TagTitle>
                        Tags
                    </TagTitle>

                    <TagMenu>
                        <TagList>
                            APP
                        </TagList>

                        <TagList>
                            IT
                        </TagList>

                        <TagList>
                            Business
                        </TagList>

                        <TagList>
                            Microsoft
                        </TagList>

                        <TagList>
                            Design
                        </TagList>

                        <TagList>
                            Office
                        </TagList>

                        <TagList>
                            Creative
                        </TagList>

                        <TagList>
                            Studio
                        </TagList>

                        <TagList>
                            Marketing
                        </TagList>

                        <TagList>
                            Tips
                        </TagList>

                        <TagList>
                            Appliances
                        </TagList>
                    </TagMenu>
                </TagBox>
            </Cont>
        </RightSection>
    </Container>
  )
}

export default BlogInfo