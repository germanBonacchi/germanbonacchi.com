import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const FooterContainer = styled.footer`
 background: #1e1e1e;
 position: relative;
 z-index: 1;
`

export const FooterWrap = styled.div`
 padding: 20px 24px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 max-width: 1100px;
 margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
 display: flex;
 justify-content: center;

 @media screen and (max-width: 820px) {
  padding-top: 32px;
 }
`

export const FooterLinksWraper = styled.div`
 display: flex;

 @media screen and (max-width: 820px) {
  flex-direction: column;
 }
`

export const FooterLinkItems = styled.nav`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 margin: 16px;
 text-align: left;
 width: 160px;
 box-sizing: border-box;
 color: #fff;

 @media screen and (max-width: 420px) {
  margin: 0;
  padding: 10px;
  width: 100%;
 }
`
export const FooterLinkTitle = styled.h1`
 font-size: 14px;
 margin-bottom: 0px;
`
export const FooterLink = styled(LinkScroll)`
 color: #fff;
 text-decoration: none;
 margin-bottom: 0.5rem;
 font-size: 14px;
 cursor: pointer;
 transition: 0.3s ease-out;
 -webkit-tap-highlight-color: transparent;

 &:hover {
  color: #a32eff;
  transition: 0.3s ease-out;
 }
`

export const SocialMedia = styled.section`
 max-width: 1000px;
 width: 100%;
`
export const SocialMediaWrap = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 max-width: 1100px;
 margin: 20px auto 0 auto;

 @media screen and (max-width: 820px) {
  flex-direction: column;
 }
`
export const SocialLogo = styled(LinkRouter)`
 color: #fff;
 justify-self: start;
 cursor: pointer;
 text-decoration: none;
 font-size: 1.5rem;
 display: flex;
 align-items: center;
 margin-bottom: 8px;
 font-weight: bold;
 transform: rotate(360deg);
 transition: transform 1s;
 -webkit-tap-highlight-color: transparent;

 &:active {
  transform: rotate(0deg);
  transition: 0s;
 }
`

export const WebsiteRights = styled.small`
 color: #fff;

 @media screen and (max-width: 820px) {
  padding-top: 20px;
  padding-bottom: 20px;
 }
`
