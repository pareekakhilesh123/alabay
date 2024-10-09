import React from 'react'
import './Mainsection.css'
import Section from '../../component/Section'
import Row from '../../component/Row'
import ImgContainer from '../../component/ImgContainer'
import TextConatiner from '../../component/TextConatiner'

 

function Mainsection() {
  return (
    <>
    <div className='mainsection'>
    <Section >
    
    <div className='bgcclip'></div>
   
    <div className='overlap'>
      <Row >
    
      <ImgContainer src={`${process.env.PUBLIC_URL}/assets/mainsection.png`} altText='Aby' classname={"main-image"} />
      <TextConatiner headline1={"History Of"} headline2={"ALABAY"} body={"The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty."}  />
      
      </Row>
      
      </div>


    
      
      
     
  </Section>
  </div>
  
  </>
  )
}

export default Mainsection