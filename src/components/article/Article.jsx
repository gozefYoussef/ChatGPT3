import React from 'react'
import './article.css'

const Article = ({ img, title, date }) => {
  return (
    <div className='gpt3-article'>
      <div className='article-img'>
        <img src={img}/>
      </div>
      <div className='article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p><a>Read Full Article</a></p>
      </div>
    </div>
  )
}

export default Article