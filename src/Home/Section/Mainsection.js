import React from 'react'
import './Mainsection.css'
import Section from '../../component/Section'
import Row from '../../component/Row'
import ImgContainer from '../../component/ImgContainer'
import TextConatiner from '../../component/TextConatiner'
 

function Mainsection() {
  return (
    <Section>
      <Row >
      <ImgContainer src='./alabay/assets/mainsection.png' altText='Aby' />
      <TextConatiner headline1={"History Of"} headline2={"ALABAY"} body={"The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty."}  />
      
      </Row>
      <Row style={{ justifyContent: 'center' }} >
      <div className='navigation'>
            <span className='nav-item'>ALL</span>
            <span className='nav-item'>PHOTOS</span>
            <span className='nav-item'>VIDEOS</span>
          </div>
      </Row>
     
  </Section>
  )
}











export default Mainsection