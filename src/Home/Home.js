import React from 'react'
import './Home.css'
import Mainsection from './Section/Mainsection'
import PhotoAndCardSection from './Section/PhotoAndCardSection'
import BaseSection from '../component/BaseSection'
import Text from '../component/Text'

function Home() {
  return (
    <div className='home'>
        <Mainsection />
        <PhotoAndCardSection />
        <Text 
  children="PROJECT VISION" 
  variant="h1" 
  style={{ color: "red" }} 
/>
        <BaseSection />
    </div>
  )
}

export default Home