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
 Anchor2,
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
 heading6,
 heading7,
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
        <Heading2 lightHeading={lightHeading} color="#a32eff">
         {heading2}
        </Heading2>
        <Heading2 lightHeading={lightHeading}> {heading3}</Heading2>
        <Heading2 lightHeading={lightHeading} color="#00c8ff">
         {heading4}
        </Heading2>
        <Heading2 lightHeading={lightHeading}>{heading5}</Heading2>
        <Heading2 lightHeading={lightHeading} color="#00c8ff">
         <Anchor
          target="_blank"
          href="//www.valtech.com/es-ar/"
          color="#00c8ff"
         >
          {heading6}
         </Anchor>
         <Anchor2
          className="animate"
          target="_blank"
          href="//www.valtech.com/es-ar/"
          color="#00c8ff"
         >
          {heading7}
         </Anchor2>
        </Heading2>
        <Description lightDesc={lightDesc}>{description}</Description>
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
 description5,
 skills,
 buttonLabel,
 primary,
 dark,
}) => {
 useEffect(() => {
  const TagCloud = require('TagCloud')

  TagCloud('#skillsSphere', skills, {
   radius: 300,
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
        <Description lightDesc={lightDesc}>{description5}</Description>
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
        <DescriptionVideoTitle lightDesc={lightDesc}>
         Video:
        </DescriptionVideoTitle>
        <HeadingVideoTitle lightHeading={lightHeading}>
         {videoTitle}
        </HeadingVideoTitle>
        <HeadingVideoSubTitle lightHeading={lightHeading}>
         {videoSubTitle}
        </HeadingVideoSubTitle>
       </TextWrapper>
      </Column1>
      <Column2>
       <ImgWrap>
        <VideoSlider
         setVideoTitle={setVideoTitle}
         setVideoSubTitle={setVideoSubTitle}
        />
       </ImgWrap>
      </Column2>
     </InfoRow>
    </InfoWrapper>
   </InfoContainer>
  </>
 )
}

export const ContactSection = ({ id, lightBg, imgStart }) => {
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
