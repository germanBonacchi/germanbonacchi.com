import styled from 'styled-components'

export const HeroContainer = styled.div`
 background: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 height: 700px;
 position: relative;
 z-index: 1;

 :before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.6) 100%
   ),
   linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  z-index: 2;
 }
`

export const HeroBg = styled.div`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 100%;
 overflow: hidden;
`
export const HeroContent = styled.div`
 z-index: 3;
 max-width: 1200px;
 position: absolute;
 padding: 8px 24px;
 display: flex;
 flex-direction: column;
 align-items: center;
`
export const HeroH1 = styled.h1`
 color: #fff;
 font-size: 48px;
 text-align: center;
 position: relative;

 @media screen and (max-width: 768px) {
  font-size: 40px;
 }

 @media screen and (max-width: 480) {
  font-size: 32px;
 }

 &::before {
  transform: scaleX(0);
  transform-origin: bottom right;
 }

 &:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
 }

 &::before {
  content: ' ';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  inset: 0 0 0 0;
  background: hsl(200 100% 80%);
  z-index: -1;
  transition: transform 0.3s ease;
  background: #a32eff;
 }
`

export const HeroP = styled.p`
 margin-top: 24px;
 color: #fff;
 font-size: 24px;
 text-align: center;
 max-width: 600px;

 @media screen and (max-width: 768px) {
  font-size: 24px;
 }

 @media screen and (max-width: 480) {
  font-size: 18px;
 }
`
