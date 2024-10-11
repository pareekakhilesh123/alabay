import React from 'react'
import './Home.css'
import Mainsection from './Section/Mainsection'
import PhotoAndCardSection from './Section/PhotoAndCardSection'

import RoadMap from './Section/RoadMap'
import CardContainer from './Section/CardContainer'
import TokenomicsSection from './Section/TokenomicsSection'
import Banner from './Section/Banner'
import Game from './Section/Game'
import UpcomingGame from '../component/UpcomingGame'
import GameCard from './Section/GameCard'
import SocilMedia from './Section/SocilMedia'




function Home() {
  return (
    <div className='home'>
      <Mainsection />
      <PhotoAndCardSection />

      <RoadMap />
      <CardContainer />
      <TokenomicsSection />
      
      <Banner />
    
      <Game />
      <UpcomingGame
        title="GAMES"
        
        imageUrl={`${process.env.PUBLIC_URL}/assets/game1.png`}  
        buttonText="Discover"
      />
      <GameCard />
      <SocilMedia />

    </div>
  )
}

export default Home