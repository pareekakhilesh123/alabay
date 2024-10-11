import React from 'react';
import './Banner.css';
import BannerComponent from '../../component/BannerComponent';
import Text from '../../component/Text';

 

function Banner() {
  const banners = [
    {
        index : 0,
      image: `${process.env.PUBLIC_URL}/assets/pinktshirt.png`,
      classname: 'tshirt-image',
      bgColor: `${process.env.PUBLIC_URL}/assets/pinktshirtbck.png`
    }
//    , {
//      image: `${process.env.PUBLIC_URL}/assets/pinktshirt.png`,
//       classname: 'tshirt-image',
//       bgColor: `${process.env.PUBLIC_URL}/assets/pinktshirtbck.png`
//     },
    
 
  ];

  return (
    <div className="banner">
    <div className='basesection'>
   
    <Text
      variant="h1"
      style={{
        color: '#FFA800',
        fontSize: '7rem',
        margin: '100px auto',
        textAlign: 'center'  
      }}
    >
    Merchandise
    </Text>
   
    {banners.map((banner, index) => (
      <BannerComponent
      h3={'Comming soon'}
        key={index}
        image={banner.image}
        classname={banner.classname}
        bgc={banner.bgColor}
      />
      
      
    ))}
   
    
   
  </div>
  </div>
  );
}

export default Banner;
