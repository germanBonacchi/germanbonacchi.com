import React from 'react'

import {
 FooterContainer,
 FooterWrap,
 FooterLinksContainer,
 FooterLinksWraper,
 FooterLinkItems,
 FooterLinkTitle,
 FooterLink,
} from './FooterElements'

const Footer = () => {
 return (
  <FooterContainer>
   <FooterWrap>
    <FooterLinksContainer>
     <FooterLinksWraper>
      <FooterLinkItems>
       <FooterLinkTitle>About us</FooterLinkTitle>
       <FooterLink to="/">Test 1</FooterLink>
       <FooterLink to="/">Test 2</FooterLink>
       <FooterLink to="/">Test 1</FooterLink>
       <FooterLink to="/">Test 2</FooterLink>
      </FooterLinkItems>
      <FooterLinkItems>
       <FooterLinkTitle>About us</FooterLinkTitle>
       <FooterLink to="/">Test 1</FooterLink>
       <FooterLink to="/">Test 2</FooterLink>
       <FooterLink to="/">Test 1</FooterLink>
       <FooterLink to="/">Test 2</FooterLink>
      </FooterLinkItems>
     </FooterLinksWraper>
     <FooterLinksWraper>
      <FooterLinkItems>
       <FooterLinkTitle>About us</FooterLinkTitle>
       <FooterLink to="/">Test 1</FooterLink>
       <FooterLink to="/">Test 2</FooterLink>
       <FooterLink to="/">Test 1</FooterLink>
       <FooterLink to="/">Test 2</FooterLink>
      </FooterLinkItems>
      <FooterLinkItems>
       <FooterLinkTitle>About us</FooterLinkTitle>
       <FooterLink to="/">Test 1</FooterLink>
       <FooterLink to="/">Test 2</FooterLink>
       <FooterLink to="/">Test 1</FooterLink>
       <FooterLink to="/">Test 2</FooterLink>
      </FooterLinkItems>
     </FooterLinksWraper>
    </FooterLinksContainer>
   </FooterWrap>
  </FooterContainer>
 )
}

export default Footer
