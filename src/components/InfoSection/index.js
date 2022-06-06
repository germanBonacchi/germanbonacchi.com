import React from 'react'
import {
 InfoContainer,
 InfoWrapper,
 InfoRow,
 Column1,
 Column2,
 TextWrapper,
 TopLine,
 Heading,
 Subtitle,
 ImgWrap,
 Img,
} from './InfoElements'

const InfoSection = () => {
 return (
  <>
   <InfoContainer id="about">
    <InfoWrapper>
     <InfoRow>
      <Column1>
       <TextWrapper>
        <TopLine>TopLine</TopLine>
        <Heading>Heading</Heading>
        <Subtitle>Subtitle</Subtitle>
       </TextWrapper>
      </Column1>
      <Column2>
       <ImgWrap>
        <Img />
       </ImgWrap>
      </Column2>
     </InfoRow>
    </InfoWrapper>
   </InfoContainer>
  </>
 )
}

export default InfoSection
