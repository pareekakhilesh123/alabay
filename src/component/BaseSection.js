import React from 'react'
import './BaseSection.css'
 

function BaseSection({children, style}) {
  return (
    <div className='basesection' style={style}>
     <div className='backgroundCilp' style={style}></div>
 <div className='backgroundOverlap'>
 
 
      {
        children 
      }
      
 </div>
    </div>
  )
}

export default BaseSection