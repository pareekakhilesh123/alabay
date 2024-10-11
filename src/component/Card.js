import React from 'react';
import './Card.css'; 

const Card = ({ title, subtitle, image, bgColor,bgc }) => {
  return (
    <div className="card-container" style={{ backgroundColor: bgColor, background: bgc  }}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
      <img src={image} alt={title} className="card-image" />
      
    </div>
  );
};

export default Card;
