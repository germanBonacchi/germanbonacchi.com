import styled from 'styled-components'

export const InfoContainer = styled.div`
 color: #fff;
 position: relative;
 z-index: 1;
 background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

 @media screen and (max-width: 768px) {
  padding: 100px 0;
 }
`
export const InfoWrapper = styled.div`
 display: grid;
 width: 100%;
 max-width: 1100px;
 margin-right: auto;
 margin-left: auto;
 padding: 50px 24px;
 justify-content: center;

 @media screen and (max-width: 768px) {
  grid-template-areas: ${({ imgStart }) =>
   imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
 }
`
export const InfoRow = styled.div`
 display: grid;
 grid-auto-flow: minmax(auto, 1fr);
 align-items: center;
 grid-template-areas: ${({ imgStart }) =>
  imgStart ? `'col2 col1'` : `'col1 col2'`};

 @media screen and (max-width: 768px) {
  grid-template-areas: ${({ imgStart }) =>
   imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
 }
`

export const Column1 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col1;
`
export const Column2 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col2;
`

export const TextWrapper = styled.div`
 max-width: 540px;
 padding-top: 0;
 padding-bottom: 60px;
`

export const TopLine = styled.p`
 color: #a32eff;
 font-size: 16px;
 line-height: 16px;
 font-weight: 700;
 letter-spacing: 1.4px;
 text-transform: uppercase;
 margin-bottom: 16px;
`

export const Heading = styled.h1`
 margin-bottom: 24px;
 font-size: 36px;
 line-height: 1.1;
 font-weight: 600;
 color: ${({ lightHeading }) => (lightHeading ? '#f7f8fa' : '#010606')};

 @media screen and (max-width: 480px) {
  font-size: 32px;
 }
`

export const Heading2 = styled.h1`
 display: inline;
 margin-bottom: 24px;
 font-size: 36px;
 line-height: 1.1;
 font-weight: 600;
 color: ${({ color }) => color};

 @media screen and (max-width: 480px) {
  font-size: 32px;
 }
`
export const Heading3 = styled.h1`
 position: relative;
 display: inline;
 margin-bottom: 24px;
 font-size: 36px;
 line-height: 1.1;
 font-weight: 600;

 @media screen and (max-width: 480px) {
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
export const Anchor = styled.a`
 text-decoration: none;
 color: ${({ color }) => color};

 background: linear-gradient(to right, #fff, #fff),
  linear-gradient(
   to right,
   rgba(255, 0, 0, 1),
   rgba(255, 0, 180, 1),
   rgba(0, 100, 200, 1)
  );
 background-size: 100% 3px, 0 3px;
 background-position: 100% 100%, 0 100%;
 background-repeat: no-repeat;
 transition: background-size 400ms;
 &:hover {
  background-size: 0 3px, 100% 3px;
 }
`

export const Description = styled.p`
 max-width: 440px;
 margin-bottom: 35px;
 font-size: 18px;
 line-height: 24px;
 color: ${({ lightDesc }) => (lightDesc ? '#f7f8fa' : '#010606')};
`

export const ImgWrap = styled.div`
 max-width: 555px;
 height: 100%;
`
export const Img = styled.img`
 width: 100%;
 margin: 0 0 10px 0;
 padding-right: 0;
`
export const BtnWrap = styled.img`
 display: flex;
 justify-content: center;
`

export const SpanSphere = styled.span`
 display: flex;
 justify-content: center;
 color: #000;
`
