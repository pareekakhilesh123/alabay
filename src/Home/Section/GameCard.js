import React from 'react'
import './GameCard.css';
import GamePreview from '../../component/GamePreview';
import SilderButton from '../../component/SilderButton';

function GameCard() {
  return (
    <div>
      <div className='game-card'>
      <h2 className='game-previews-title'>GAME PREVIEWS</h2>

      <div className='game-previews-container'>
        <GamePreview
        //   title="Artifact Collected"
        //   description="Explore the world to collect more!"
          imageUrl={`${process.env.PUBLIC_URL}/assets/gm1.png`}
          
        />

        <GamePreview
          title="Pungent Poop"
         
          imageUrl={`${process.env.PUBLIC_URL}/assets/gm2.png`}
           
        />

        <GamePreview
        //   title="Mighty Hound"
        
          imageUrl={`${process.env.PUBLIC_URL}/assets/gm3.png`}
    
        />
        <SilderButton style={{position: "relative",top: "125px", left: "28px"}} />
      </div>
    </div>
    </div>
  )
}

export default GameCard