import React from 'react'
import {
 HeroContainer,
 HeroBg,
 HeroContent,
 HeroH1,
 HeroP,
} from './HeroElements'
import ParticlesBackground from '../ParticleBackground'
import SocialFollow from '../SocialFollow'

const HeroSection = () => {
 return (
  <HeroContainer id="home">
   <HeroBg>
    <ParticlesBackground />
   </HeroBg>
   <HeroContent>
    <HeroH1>Germán Bonacchi</HeroH1>
    <HeroP> Site under construction </HeroP>
    <HeroP> 👷🔨🔧🧱 </HeroP>
    <SocialFollow />
   </HeroContent>
  </HeroContainer>
 )
}

export default HeroSection
