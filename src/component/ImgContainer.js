import React from 'react'
import './ImgContainer.css'

const ImgContainer = ({ src, altText,classname }) => {
    return  <div className='imgcontainer'>
    <img src={src} alt={altText} className={classname}/>
    
  </div>
  }

export default ImgContainer