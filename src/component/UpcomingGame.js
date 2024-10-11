import React from 'react'
import './UpcomingGame.css';
import Text from './Text';

function UpcomingGame({ title, imageUrl, buttonText }) {
  return (
    <div>
       <div className='upcoming-game'>
      <div className='game-text'>
  
        <Text variant="h1" style={{ fontSize: '4rem', color: '#FFFFFF' }}>
          {title}
        </Text>

         
         
      </div>

      <div className='game-image-container'>
       
        <img src={imageUrl} alt='Upcoming Game' className='game-image' />

        <div className='button-overlay'>
          <button className='discover-button'>{buttonText}</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UpcomingGame