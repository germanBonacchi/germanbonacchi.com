import React, { useEffect, useState } from 'react'
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
 HeadingVideoTitle,
 HeadingVideoSubTitle,
 Anchor,
 Description,
 DescriptionVideoTitle,
 ImgWrap,
 Img,
 SpanSphere,
} from './InfoElements'

import { Button } from '../ButtomElement'
import VideoSlider from '../VideoSlider'
import Contact from '../Contact'
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
 lightDesc,
 description,
 img,
 alt,
 buttonLabel,
 primary,
 dark,
 heading1,
 heading2,
 heading3,
 heading4,
 heading5,
}) => {
 return (
  <>
   <InfoContainer id={id} lightBg={lightBg}>
    <InfoWrapper>
     <InfoRow imgStart={imgStart}>
      <Column1>
       <TextWrapper>
        <TopLine>{topLine}</TopLine>
        <Heading2 lightHeading={lightHeading}>{heading1}</Heading2>
        <Heading2 lightHeading={lightHeading} color="#F71963">
         {heading2}
        </Heading2>
        <Heading2 lightHeading={lightHeading}> {heading3}</Heading2>
        <Heading2 lightHeading={lightHeading} color="#F71963">
         <Anchor target="_blank" href="//www.vtex.com" color="#F71963">
          {heading4}
         </Anchor>
        </Heading2>
        <Heading2 lightHeading={lightHeading} color="#F71963">
         {heading5}
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
 useEffect(() => {
  const TagCloud = require('TagCloud')

  TagCloud('#skillsSphere', skills, {
   radius: 250,
   maxSpeed: 'fast',
   initSpeed: 'fast',
   direction: 100,
   keep: false,
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
    const [videoTitle, setVideoTitle] = useState([])
    const [videoSubTitle, setVideoSubTitle] = useState([])
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
        <DescriptionVideoTitle lightDesc={lightDesc}>Video:</DescriptionVideoTitle>
        <HeadingVideoTitle lightHeading={lightHeading}>{videoTitle}</HeadingVideoTitle>
        <HeadingVideoSubTitle lightHeading={lightHeading}>{videoSubTitle}</HeadingVideoSubTitle>
       </TextWrapper>
      </Column1>
      <Column2>
       <ImgWrap>
        <VideoSlider setVideoTitle={setVideoTitle} setVideoSubTitle={setVideoSubTitle}/>
       </ImgWrap>
      </Column2>
     </InfoRow>
    </InfoWrapper>
   </InfoContainer>
  </>
 )
}

export const ContactSection = ({
 id,
 lightBg,
 imgStart,
 topLine,
 lightDesc,
 description,
 buttonLabel,
 primary,
 dark,
 img,
 alt,
}) => {
 return (
  <>
   <InfoContainer id={id} lightBg={lightBg}>
    <InfoWrapper>
     <InfoRow imgStart={imgStart}>
      <Contact />
     </InfoRow>
    </InfoWrapper>
   </InfoContainer>
  </>
 )
}
