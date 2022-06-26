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

import { Button } from 'react-scroll'

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
        <Button
         to="home"
         smooth={true}
         duration={500}
         spy={true}
         exact="true"
         offset={-80}
         primary={1}
         dark={1}
         dark2={1}
        ></Button>
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
