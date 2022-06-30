import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ReactPlayer from 'react-player'
import { items, settings } from './config/config.js'
import { SliderContainer, Card, Img } from './VideoSliderElements'
import '../../css/videoSlider.css'

export default function VideoSlider() {
 return (
  <SliderContainer>
   <Slider {...settings}>
    {items.map((item) => (
     <Card>
      <Img src={item.img} alt={item.title} />
     </Card>
    ))}
   </Slider>
   <div class="main-video">
    <ReactPlayer
     controls
     url="https://www.youtube.com/watch?v=WjRuhuWnqeo"
    ></ReactPlayer>
   </div>
  </SliderContainer>
 )
}
