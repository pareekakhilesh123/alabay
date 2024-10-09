import React from 'react'
import './PhotoAndCardSection.css'
import Row from '../../component/Row'
import PhotoCard from '../../component/PhotoCard'
import SilderButton from '../../component/SilderButton'
import Text from '../../component/Text'

function PhotoAndCardSection() {
  return (
    <div className='photoAndCardSection'>
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
       <Text
  children="PROJECT VISION" 
  variant="h1" 
  style={{ color: "#FFA800",fontSize :'5rem',margin: '170px 0px' }} 
/>
       </div>
       
    </div>
  )
}

export default PhotoAndCardSection