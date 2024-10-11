import React from 'react'
import BaseSection from '../../component/BaseSection'
import './RoadMap.css'
 
import TextConatiner from '../../component/TextConatiner'
import ImgContainer from '../../component/ImgContainer'
import Text from '../../component/Text'
 
 





function RoadMap() {
  return (
    <>
<div className='roadmap'>

<BaseSection>
<ImgContainer
  src={`${process.env.PUBLIC_URL}/assets/projectvision.png`} 
  altText={"alt"} classname={'main-img'}
 
/>

<div className='pera'>
<TextConatiner body={"Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together."}  />
</div>

<Text
  children="ROAD MAP" 
  variant="h1" 
  style={{ color: "#FFFFFF",fontSize :'7rem', margin: '100px 0px 0px 124px' }} 
/>
<div className='road-map-img'>
<ImgContainer
  src={`${process.env.PUBLIC_URL}/assets/roadmapimg.png`} 
  altText={"alt"}
  classname={'imgwidth'}
  
/>

<div className='pera'>
<TextConatiner body={"Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together."}  />
</div>
</div>
      </BaseSection>
    
      
</div>
    </>
  )
}

export default RoadMap