import React from 'react'
import {
 HeroContainer,
 HeroBg,
 HeroContent,
 HeroH1,
 HeroP,
} from './HeroElements'
import ParticlesBackground from '../Particles/ParticleBackground'

const HeroSection = () => {
 return (
  <HeroContainer id="home">
   <HeroBg>
    <ParticlesBackground />
   </HeroBg>
   <HeroContent>
    <HeroP>Hi, I'm</HeroP>
    <HeroH1>Germán Bonacchi</HeroH1>
    <HeroP>Software Developer | VTEX Apps Engineer</HeroP>
   </HeroContent>
  </HeroContainer>
 )
}

export default HeroSection
