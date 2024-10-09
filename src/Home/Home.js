import React from 'react'
import './Home.css'
import Mainsection from './Section/Mainsection'
import PhotoAndCardSection from './Section/PhotoAndCardSection'

import RoadMap from './Section/RoadMap'

function Home() {
  return (
    <div className='home'>
        <Mainsection />
        <PhotoAndCardSection />
        
         <RoadMap />
    </div>
  )
}

export default Home