import React from 'react'
import './ImgContainer.css'

const ImgContainer = ({ src, altText }) => {
    return  <div className='imgcontainer'>
    <img src={src} alt={altText} className='main-image'/>
  </div>
  }

export default ImgContainer