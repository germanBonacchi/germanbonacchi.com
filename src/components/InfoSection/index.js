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
 Description,
 ImgWrap,
 Img,
} from './InfoElements'

import { Button } from '../ButtomElement'

const InfoSection = ({
 id,
 lightBg,
 imgStart,
 topLine,
 lightHeading,
 heading,
 lightDesc,
 description,
 img,
 alt,
 buttonLabel,
 primary,
 dark,
}) => {
 return (
  <>
   <InfoContainer id={id} lightBg={lightBg}>
    <InfoWrapper>
     <InfoRow imgStart={imgStart}>
      <Column1>
       <TextWrapper>
        <TopLine>{topLine}</TopLine>
        <Heading lightHeading={lightHeading}>{heading}</Heading>
        <Description lightDesc={lightDesc}>{description}</Description>
        <Button
         to="home"
         smooth={true}
         duration={500}
         spy={true}
         exact="true"
         offset={-80}
         primary={primary ? 1 : 0}
         dark={dark ? 1 : 0}
        >
         {buttonLabel}
        </Button>
       </TextWrapper>
      </Column1>
      <Column2>
       <ImgWrap>
        <Img src={img} alt={alt} />
       </ImgWrap>
      </Column2>
     </InfoRow>
    </InfoWrapper>
   </InfoContainer>
  </>
 )
}

export default InfoSection
