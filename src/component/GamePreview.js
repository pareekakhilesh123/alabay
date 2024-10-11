import React from 'react'
import './GamePreview.css';

function GamePreview({ title, description, imageUrl,   }) {
  return (
    <div className='game-preview' style={{ backgroundImage: `url(${imageUrl})` }}>
     
      <div className='game-details'>
        <h3 className='game-title'>{title}</h3>
        <p className='game-description'>{description}</p>
    
        {/* <img src={imageUrl} alt={title} className='game-image' /> */}
      </div>
    </div>
  )
}

export default GamePreview