/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Config from './config/config.js'
import {
 SliderComponent,
 Card,
 Img,
 Video,
 ReactPlayerComponent,
} from './VideoSliderElements'
import '../../css/videoSlider.css'
import { useTranslation } from 'react-i18next'

export default function VideoSlider({ setVideoTitle, setVideoSubTitle }) {
 const [activeVideo, setActiveVideo] = useState(0)
 const { items, settings } = Config()
 const { i18n } = useTranslation()

 const handleChange = (index) => {
  setActiveVideo(index)
  setVideoTitle(items[index].title)
  setVideoSubTitle(items[index].subtitle)
 }

 useEffect(() => {
  handleChange(0)
 }, [])

 useEffect(() => {
  setVideoTitle(items[activeVideo].title)
  setVideoSubTitle(items[activeVideo].subtitle)
 }, [i18n.language])

 return (
  <>
   <SliderComponent {...settings}>
    {items.map((item) => (
     <Card
      className={item.id === activeVideo ? 'active-card' : 'card'}
      id={item.id}
      key={item.id}
      onClick={() => {
       handleChange(item.id)
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
     config={{
      youtube: { playerVars: { origin: 'https://www.youtube.com' } },
     }}
    ></ReactPlayerComponent>
   </Video>
  </>
 )
}
