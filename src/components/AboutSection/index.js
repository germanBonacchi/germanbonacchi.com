import React from 'react'
import {
 InfoContainer,
 InfoWrapper,
 InfoRow,
 Column1,
 TextWrapper,
 TopLine,
 Heading,
 Subtitle,
} from './AboutElements'
const AboutSection = () => {
 return (
  <>
   <InfoContainer>
    <InfoWrapper>
     <InfoRow>
      <Column1>
       <TextWrapper>
        <TopLine>TopLine</TopLine>
        <Heading>Heading</Heading>
        <Subtitle>Subtitle</Subtitle>
       </TextWrapper>
      </Column1>
     </InfoRow>
    </InfoWrapper>
   </InfoContainer>
  </>
 )
}

export default AboutSection
