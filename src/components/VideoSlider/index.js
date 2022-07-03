import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ReactPlayer from 'react-player'
import { items, settings } from './config/config.js'
import {
 VideoSliderContainer,
 SliderComponent,
 Card,
 Img,
 Video,
} from './VideoSliderElements'
import '../../css/videoSlider.css'

export default function VideoSlider() {
 const [activeVideo, setActiveVideo] = useState(0)

 useEffect(() => {
  setActiveVideo(0)
 }, [])

 return (
  <>
   <SliderComponent {...settings}>
    {items.map((item) => (
     <Card
      className={item.id === activeVideo ? 'active-card' : 'card'}
      id={item.id}
      key={item.id}
      onClick={() => setActiveVideo(item.id)}
     >
      <Img src={item.img} alt={item.title} />
     </Card>
    ))}
   </SliderComponent>
   <Video>
    <ReactPlayer controls url={items[activeVideo].videoLink}></ReactPlayer>
   </Video>
  </>
 )
}
