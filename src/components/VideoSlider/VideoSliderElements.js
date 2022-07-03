import styled from 'styled-components'
import Slider from 'react-slick'

export const SliderComponent = styled(Slider)`
 margin-bottom: 10px;
 width: 100%;
`

export const Card = styled.div`
 background-color: #fff;
 border: 2px solid #fff;
 border-radius: 10px;
 overflow: hidden;
 cursor: pointer;
 transition: all 0.3s ease-in-out;
 margin-top: 10px;
 margin-bottom: 10px;

 &:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  overflow: hidden;
 }

 &:active {
  transform: scale(0.95);
  border: 2px solid #a32eff;
 }
`
export const Img = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
`
export const Video = styled.div`
 justify-content: center;
 width: 100%;
 overflow: hidden;
 border: 2px solid #fff;
 border-radius: 10px;
`
