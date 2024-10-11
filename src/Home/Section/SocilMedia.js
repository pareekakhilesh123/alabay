import React from 'react';
import './SocialMedia.css';
import Text from '../../component/Text';

function SocialMedia() {
  return (
    <div className="social-media-container">
     
      <Text
        variant={"h1"}
        style={{ color: "#FFA800", fontSize: '7rem', marginTop: '100px' }}
      > 
        Social Media
        <br />
        Links
      </Text>

       <div className='imgcontainer1'>
      <div className="image-link-container">
        
     

        
        <div className="social-media-links">
          <a href="/" className="social-link">
            Twitter Link
          </a>

          <a href="/" className="social-link">
            Telegram Link
          </a>
        </div>
        <img 
          src={`${process.env.PUBLIC_URL}/assets/socialmedia.png`}
          alt="Cute Dog with Social Media Links" 
          className="dog-image"
        />
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
