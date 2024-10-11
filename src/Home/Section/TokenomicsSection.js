import React from 'react'
import './TokenomicsSection.css'
import BaseSection from '../../component/BaseSection'
import ImgContainer from '../../component/ImgContainer'
// import TextConatiner from '../../component/TextConatiner'
import Text from '../../component/Text'
import InfoBox from '../../component/InfoBox'

function TokenomicsSection() {
  return (
    <div>
         <BaseSection style={{ height: '1311px' }}>
         <Text
  children="TOKENOMICS" 
  variant="h1" 
  style={{ color: "#FFFFFF",fontSize :'5rem',position: "absolute",top : "345px" }} 
/>
<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <InfoBox 
        title="Liquidity" 
        highlightText="LOCKED" 
        bgColor="#444444" 
        textColor="#FFD700" 
      />
      <InfoBox 
        title="Contract" 
        highlightText="RENOUNCED" 
        bgColor="#444444" 
        textColor="#FFD700" 
      />
      <InfoBox 
        title="Taxes" 
        highlightText="0%" 
        bgColor="#444444" 
        textColor="#FFD700" 
      />
    </div>
<ImgContainer
 src={`${process.env.PUBLIC_URL}/assets/money.png`} 
 altText={"alt"}
 classname={'money'}
/>

         </BaseSection>
    </div>
  )
}

export default TokenomicsSection