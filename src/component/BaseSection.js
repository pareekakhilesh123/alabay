import React from 'react'
import './BaseSection.css'
 

function BaseSection({children}) {
  return (
    <div className='basesection'>
    <div className='backgroundCilp'></div>

 <div className='backgroundOverlap'>
 
 
      {
        children 
      }
      
 </div>
    </div>
  )
}

export default BaseSection