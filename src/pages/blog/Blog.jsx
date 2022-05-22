import React from 'react'
import ArrowUp from '../../components/arrowUp/ArrowUp'
import BlogInfo from '../../components/blogInfo/BlogInfo'
import Copyright from '../../components/copyright/Copyright'
import Footer from '../../components/footer/Footer'
import MiniNav from '../../components/miniNav/MiniNav'
import Navbar from '../../components/navbar/Navbar'

const Blog = () => {
  return (
    <div id='Blog'>
        <Navbar />
        <MiniNav title='Blog' />
        <BlogInfo />
        <Footer />
        <Copyright />
        <ArrowUp href='#Blog' />
    </div>
  )
}

export default Blog