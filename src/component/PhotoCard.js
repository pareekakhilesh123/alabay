import React from 'react'
import './PhotoCard.css'

function PhotoCard({img,alt,phototext}) {
  return (
    <div className='photocardcontainer'>
      {/* <img src='' alt={alt}/> */}
      <p>{phototext}</p>

    </div>
  )
}

export default PhotoCard