import React from 'react'
import {
 HeroContainer,
 HeroBg,
 HeroContent,
 HeroH1,
 HeroP,
 ImgWrap,
 Img,
} from './HeroElements'
import ParticlesBackground from '../Particles/ParticleBackground'
import profile from '../../images/profile.jpg'

const HeroSection = () => {
 return (
  <HeroContainer id="home">
   <HeroBg>
    <ParticlesBackground />
   </HeroBg>
   <HeroContent>
    <HeroP>Hi, I'm</HeroP>
    <HeroH1>Germán Bonacchi</HeroH1>
    <ImgWrap>
     <Img src={profile} alt="profile" />
    </ImgWrap>
    <HeroP>Software Developer | VTEX Apps Engineer</HeroP>
   </HeroContent>
  </HeroContainer>
 )
}

export default HeroSection
