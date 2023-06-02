import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import { blog01,blog02,blog03,blog04,blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3-blog section__margin'>
      <div className='blog-heading'>
        <h1 className='gradient__text'>A lot is happening We are blogging about it</h1>
      </div>
      <div className='blog-container'>
        <div className='blog-container-groupA'>
          <Article img={blog01} title="tell me what you see" date="Sep 05. 2023"/>
        </div>
        <div className='blog-container-groupB'>
        <Article img={blog02} title="perfect paradise" date="Sep 05. 2023"/>
        <Article img={blog03} title="tearing at the seams" date="Sep 05. 2023"/>
        <Article img={blog04} title="i wish i could escape it" date="Sep 05. 2023"/>
        <Article img={blog05} title="i dont wanna fake it" date="Sep 05. 2023"/>
        </div>
      </div>
    </div>
  )
}

export default Blog