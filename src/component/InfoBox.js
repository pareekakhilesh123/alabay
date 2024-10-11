import React from 'react'
import './InfoBox.css';

function InfoBox({ title, highlightText, bgColor, textColor }) {
  return (
    <div> 
     <div className="info-box" style={{ backgroundColor: bgColor, color: textColor }}>
      <p className="info-title">{title}</p>
      <h2 className="info-highlight">{highlightText}</h2>
    </div>
    </div>
  )
}

export default InfoBox