import React, { useEffect } from 'react'
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
 SpanSphere,
} from './InfoElements'

import { Button } from '../ButtomElement'
import VideoSlider from '../VideoSlider'

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

export const SkillSection = ({
 id,
 lightBg,
 imgStart,
 topLine,
 lightDesc,
 description,
 description2,
 description3,
 description4,
 skills,
 buttonLabel,
 primary,
 dark,
}) => {
 const TagCloud = require('TagCloud')

 useEffect(() => {
  TagCloud('#skillsSphere', skills, {
   radius: 250,
   maxSpeed: 'fast',
   initSpeed: 'fast',
   direction: 135,
  })

  const observerTagElements = new MutationObserver((mutations, obsTE) => {
   const tagElements = document.querySelectorAll('.tagcloud')
   if (tagElements && tagElements.length > 1) {
    tagElements.forEach((el, index) => {
     if (index > 0) {
      el.remove()
     }
    })
   }
  })

  observerTagElements.observe(document, {
   childList: true,
   subtree: true,
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

 return (
  <>
   <InfoContainer id={id} lightBg={lightBg}>
    <InfoWrapper>
     <InfoRow imgStart={imgStart}>
      <Column1>
       <TextWrapper>
        <TopLine>{topLine}</TopLine>
        <Description lightDesc={lightDesc}>{description}</Description>
        <Description lightDesc={lightDesc}>{description2}</Description>
        <Description lightDesc={lightDesc}>{description3}</Description>
        <Description lightDesc={lightDesc}>{description4}</Description>
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
        <SpanSphere id="skillsSphere"></SpanSphere>
       </ImgWrap>
      </Column2>
     </InfoRow>
    </InfoWrapper>
   </InfoContainer>
  </>
 )
}

export const TrainingsSection = ({
 id,
 lightBg,
 imgStart,
 lightHeading,
 description,
 topLine,
 heading,
 lightDesc,
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
        <VideoSlider />
       </ImgWrap>
      </Column2>
     </InfoRow>
    </InfoWrapper>
   </InfoContainer>
  </>
 )
}
