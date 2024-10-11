import React from 'react';
import Card from '../../component/Card';

const CardContainer = () => {
  const cards = [
    {
      title: "Community Building",
      subtitle: "and Initial Launch",
      image: `${process.env.PUBLIC_URL}/assets/cardphoto1.png`,  
    //   bgColor: "#ffd44f",
      bgc:"linear-gradient(180deg, #DBC70C 0%, rgba(255, 242, 128, 0) 100%) "
    },
    {
      title: "Merchandise Store Launch",
      subtitle: "",
     image: `${process.env.PUBLIC_URL}/assets/cardphoto2.png`,
    //   bgColor: "#51dbff",'
     bgc:"linear-gradient(180deg, #00D4D4 0%, rgba(65, 255, 255, 0) 100%) "
    },
    {
      title: "Community Events",
      subtitle: "and Contests",
    image: `${process.env.PUBLIC_URL}/assets/cardphoto4.png`,
    //   bgColor: "#f461ff"
     bgc:" linear-gradient(180deg, #D427FF 0%, rgba(212, 39, 255, 0) 100%) "
    },
    {
      title: "Expansion and New Features",
      subtitle: "",
     image: `${process.env.PUBLIC_URL}/assets/cardphoto3.png`,
    //   bgColor: "#a03c22"
     bgc:" linear-gradient(179.53deg, #8F3A3C 0.41%, rgba(143, 58, 60, 0) 95.85%)"
    }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '10px' }}>
      {cards.map((card, index) => (
        <Card 
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          image={card.image}
        //   bgColor={card.bgColor}
          bgc={card.bgc}
        />
        
      ))}
    </div>
  );
};

export default CardContainer;
