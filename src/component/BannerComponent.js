import React from 'react';
import './BannerComponent.css';

function BannerComponent({ image, bgc, classname, h3 }) {
  return (
    <div className='banner-component' style={{ backgroundImage: `url(${bgc})` }}>
    <h3 className='comming'>{h3}</h3>
      <img src={image} alt={classname} className={classname} />  
    </div>
  );
}

export default BannerComponent;
