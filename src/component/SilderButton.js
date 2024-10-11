import React from 'react'
import './SilderButton.css'

function SilderButton({style}) {
  return (
    <div>
      <button  className='silderbutton' style={style} >
        <img src="./alabay/assets/rightmoveicon.svg" alt='right move icon' className="rightmoveicon"/>
      </button>
    </div>
  )
}

export default SilderButton