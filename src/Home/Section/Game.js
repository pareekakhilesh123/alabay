import React from 'react'
import './Game.css'
import Text from '../../component/Text'


function Game() {
  return (
    <div className='game'>
      <div className='backgroundCilp'>
        <Text
          variant="h1"
          style={{ color: "#FFFFFF", fontSize: '7rem', margin: '100px 0px 0px 124px', position: 'relative', top: '540px' }}
        >
          GAME
        </Text>
        <Text
          variant="h2"
          style={{ color: "#FFFFFF", fontSize: '2rem', margin: '5px 0px 0px 0px', position: 'relative', top: '560px' }}
        >
          Stay tuned for upcoming games!
        </Text>
       

      </div>
    </div>
  )
}

export default Game
