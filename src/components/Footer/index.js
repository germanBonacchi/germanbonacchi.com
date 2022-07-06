import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import {
 FooterContainer,
 FooterWrap,
 FooterLinksContainer,
 FooterLinksWraper,
 FooterLinkItems,
 FooterLinkTitle,
 FooterLink,
 SocialMedia,
 SocialMediaWrap,
 SocialLogo,
 WebsiteRights,
} from './FooterElements'

import SocialIcons from '../SocialIcons'

const Footer = () => {
 const [scrollNav, setScrollNav] = useState(false)

 const changeNav = () => {
  if (window.scrollY >= 80) {
   setScrollNav(true)
  } else {
   setScrollNav(false)
  }
 }

 useEffect(() => {
  window.addEventListener('scroll', changeNav)
 }, [])

 const toggleHome = () => {
  scroll.scrollToTop()
 }
 return (
  <FooterContainer>
   <FooterWrap>
    <FooterLinksContainer>
     <FooterLinksWraper>
      <FooterLinkItems scrollNav={scrollNav}>
       <FooterLinkTitle>
        <FooterLink
         id="aboutLinkFooter"
         to="about"
         smooth={true}
         duration={500}
         spy={true}
         exact="true"
         offset={-80}
        >
         About
        </FooterLink>
       </FooterLinkTitle>
      </FooterLinkItems>
      <FooterLinkItems scrollNav={scrollNav}>
       <FooterLinkTitle>
        <FooterLink
         id="skillsLinkFooter"
         to="skills"
         smooth={true}
         duration={500}
         spy={true}
         exact="true"
         offset={-80}
        >
         Skills
        </FooterLink>
       </FooterLinkTitle>
      </FooterLinkItems>
     </FooterLinksWraper>
     <FooterLinksWraper>
      <FooterLinkItems scrollNav={scrollNav}>
       <FooterLinkTitle>
        <FooterLink
         id="trainingsLinkFooter"
         to="trainings"
         smooth={true}
         duration={500}
         spy={true}
         exact="true"
         offset={-80}
        >
         Trainings
        </FooterLink>
       </FooterLinkTitle>
      </FooterLinkItems>
      <FooterLinkItems scrollNav={scrollNav}>
       <FooterLinkTitle>
        <FooterLink
         id="contactLinkFooter"
         to="contact"
         smooth={true}
         duration={500}
         spy={true}
         exact="true"
         offset={-80}
        >
         Contact
        </FooterLink>
       </FooterLinkTitle>
      </FooterLinkItems>
     </FooterLinksWraper>
    </FooterLinksContainer>
    <SocialMedia>
     <SocialMediaWrap>
      <SocialLogo to="/" onClick={toggleHome}>
       <svg
        className="svgLogo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="50"
       >
        <path d="M20.04 317.3C18 317.3 16 315.8 16 313.3V150.5c0-2.351 1.91-4.012 4.001-4.012c.6882 0 1.396 .18 2.062 .5748l76.62 45.1l-75.28 122.3C22.59 316.8 21.31 317.3 20.04 317.3zM231.4 405.2l-208.2-22.06c-4.27-.4821-7.123-4.117-7.123-7.995c0-1.401 .3725-2.834 1.185-4.161L122.7 215.1L231.4 405.2zM31.1 420.1c0-2.039 1.508-4.068 3.93-4.068c.1654 0 .3351 .0095 .5089 .0291l203.6 22.31v65.66C239.1 508.6 236.2 512 232 512c-1.113 0-2.255-.2387-3.363-.7565L34.25 423.6C32.69 422.8 31.1 421.4 31.1 420.1zM33.94 117.1c-1.289-.7641-1.938-2.088-1.938-3.417c0-1.281 .6019-2.567 1.813-3.364l150.8-98.59C185.1 10.98 187.3 10.64 188.6 10.64c4.32 0 8.003 3.721 8.003 8.022c0 1.379-.3788 2.818-1.237 4.214L115.5 165.8L33.94 117.1zM146.8 175.1l95.59-168.4C245.5 2.53 250.7 0 255.1 0s10.5 2.53 13.62 7.624l95.59 168.4H146.8zM356.4 207.1l-100.4 175.7L155.6 207.1H356.4zM476.1 415.1c2.422 0 3.93 2.029 3.93 4.068c0 1.378-.6893 2.761-2.252 3.524l-194.4 87.66c-1.103 .5092-2.241 .7443-3.35 .7443c-4.2 0-7.994-3.371-7.994-7.994v-65.69l203.6-22.28C475.7 416 475.9 415.1 476.1 415.1zM494.8 370.9C495.6 372.3 496 373.7 496 375.1c0 3.872-2.841 7.499-7.128 7.98l-208.2 22.06l108.6-190.1L494.8 370.9zM316.6 22.87c-.8581-1.395-1.237-2.834-1.237-4.214c0-4.301 3.683-8.022 8.003-8.022c1.308 0 2.675 .3411 4.015 1.11l150.8 98.59c1.211 .7973 1.813 2.076 1.813 3.353c0 1.325-.6488 2.649-1.938 3.429L396.5 165.8L316.6 22.87zM491.1 146.5c2.091 0 4.001 1.661 4.001 4.012v162.8c0 2.483-2.016 4.006-4.053 4.006c-1.27 0-2.549-.5919-3.353-1.912l-75.28-122.3l76.62-45.1C490.6 146.7 491.3 146.5 491.1 146.5z" />
       </svg>
      </SocialLogo>
      <WebsiteRights>
       Germán Bonacchi © {new Date().getFullYear()} All rights reserved.
      </WebsiteRights>
      <SocialIcons component="Footer" />
     </SocialMediaWrap>
    </SocialMedia>
   </FooterWrap>
  </FooterContainer>
 )
}

export default Footer
