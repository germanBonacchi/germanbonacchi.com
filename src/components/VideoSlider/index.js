import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { items, settings } from './config/config.js'
import {
 SliderComponent,
 Card,
 Img,
 Video,
 ReactPlayerComponent,
} from './VideoSliderElements'
import '../../css/videoSlider.css'

export default function VideoSlider({setVideoTitle, setVideoSubTitle}) {
 const [activeVideo, setActiveVideo] = useState(0)

 useEffect(() => {
  setActiveVideo(0)
  setVideoTitle(items[0].title)
  setVideoSubTitle(items[0].subtitle)
 }, [])

 return (
  <>
   <SliderComponent {...settings}>
    {items.map((item) => (
     <Card
      className={item.id === activeVideo ? 'active-card' : 'card'}
      id={item.id}
      key={item.id}
      onClick={() => {
        setActiveVideo(item.id)
        setVideoTitle(item.title)
        setVideoSubTitle(item.subtitle)
    }}
     >
      <Img src={item.img} alt={item.title} />
     </Card>
    ))}
   </SliderComponent>
   <Video>
    <ReactPlayerComponent
     width="100%"
     height="100%"
     controls
     url={items[activeVideo].videoLink}
     config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }}
    ></ReactPlayerComponent>
   </Video>
  </>
 )
}
