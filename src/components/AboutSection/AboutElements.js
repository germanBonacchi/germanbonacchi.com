import styled from 'styled-components'

export const InfoContainer = styled.div`
 color: #fff;
 background-color: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '010606')};

 @media screen and (max-width: 768px) {
  padding: 100px 0;
 }
`

export const InfoWrapper = styled.div`
 display: grid;
 z-index: 1;
 height: 860px;
 width: 100%;
 max-width: 1100px;
 margin-right: auto;
 margin-left: auto;
 padding: 0 24px;
 justify-content: center;
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

export const TopLine = styled.div`
 color: #01bf71;
 font-size: 16px;
 line-height: 16px;
 font-weight: 700;
 letter-spacing: 1.4px;
 text-transform: uppercase;
 margin-bottom: 16px;
`

export const Heading = styled.div`
 margin-bottom: 24px;
 font-size: 48px;
`

export const Subtitle = styled.div``
