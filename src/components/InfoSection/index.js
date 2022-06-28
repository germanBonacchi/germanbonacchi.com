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
 Heading2,
 Heading3,
 Anchor,
 Description,
 ImgWrap,
 Img,
} from './InfoElements'

import { Button } from '../ButtomElement'

export const InfoSection = ({
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
        {buttonLabel && (
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
        )}
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

export const AboutSection = ({
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
 headingTwo1,
 headingTwo2,
 headingTwo3,
 headingTwo4,
 headingTwo5,
 headingTwo6,
 headingTwo7,
}) => {
 return (
  <>
   <InfoContainer id={id} lightBg={lightBg}>
    <InfoWrapper>
     <InfoRow imgStart={imgStart}>
      <Column1>
       <TextWrapper>
        <TopLine>{topLine}</TopLine>
        <Heading2 lightHeading={lightHeading}>{headingTwo1}</Heading2>
        <Heading3 lightHeading={lightHeading}>{headingTwo2}</Heading3>
        <Heading2 lightHeading={lightHeading}>{headingTwo3} </Heading2>
        <Heading2 lightHeading={lightHeading} color="#F71963">
         {headingTwo4}
        </Heading2>
        <Heading2 lightHeading={lightHeading}> {headingTwo5}</Heading2>
        <Heading2 lightHeading={lightHeading} color="#F71963">
         <Anchor target="_blank" href="//www.vtex.com" color="#F71963">
          {headingTwo6}
         </Anchor>
        </Heading2>
        <Heading2 lightHeading={lightHeading} color="#F71963">
         {headingTwo7}
        </Heading2>
        <Description lightDesc={lightDesc}>{description}</Description>
        {buttonLabel && (
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
        )}
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
