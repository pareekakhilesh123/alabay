import React from 'react'
import './PhotoAndCardSection.css'
import Row from '../../component/Row'
import PhotoCard from '../../component/PhotoCard'
import SilderButton from '../../component/SilderButton'

function PhotoAndCardSection() {
  return (
    <div>
           <Row style={{ justifyContent: 'center' }} >
      <div className='navigation'>
            <span className='nav-item'>ALL</span>
            <span className='nav-item'>PHOTOS</span>
            <span className='nav-item'>VIDEOS</span>
          </div> 
          </Row>
       
      <div className='photocardwrap'>
      <PhotoCard
      phototext ={"photo1"}
       />
        <PhotoCard
      phototext ={"photo2"}
       />
         <PhotoCard
      phototext ={"photo3"}
       />
       
       <SilderButton />
      
       </div>
       
    </div>
  )
}

export default PhotoAndCardSection