import video0img from '../../../images/video0img.jpg'
import video1img from '../../../images/video1img.jpg'
import video2img from '../../../images/video2img.jpg'
import video3img from '../../../images/video3img.jpg'
import video4img from '../../../images/video4img.jpg'
import video5img from '../../../images/video5img.jpg'
import { useTranslation } from 'react-i18next'

const Config = () => {
 const { t } = useTranslation('translation', { keyPrefix: 'VideoSlider' })
 const translations = {
  title0: t('title0'),
  subtitle0: t('subtitle0'),
  title1: t('title1'),
  subtitle1: t('subtitle1'),
  title2: t('title2'),
  subtitle2: t('subtitle2'),
  title3: t('title3'),
  subtitle3: t('subtitle3'),
  title4: t('title4'),
  subtitle4: t('subtitle4'),
  title5: t('title5'),
  subtitle5: t('subtitle5'),
 }
 const items = [
  {
   id: 0,
   title: translations.title0,
   subtitle: translations.subtitle0,
   videoLink: 'https://www.youtube.com/watch?v=WjRuhuWnqeo',
   img: video0img,
  },
  {
   id: 1,
   title: translations.title1,
   subtitle: translations.subtitle1,
   videoLink: 'https://www.youtube.com/watch?v=EjZpzq3yl6c',
   img: video1img,
  },
  {
   id: 2,
   title: translations.title2,
   subtitle: translations.subtitle2,
   videoLink: 'https://www.youtube.com/watch?v=FrRqouiu6jE',
   img: video2img,
  },
  {
   id: 3,
   title: translations.title3,
   subtitle: translations.subtitle3,
   videoLink: 'https://www.youtube.com/watch?v=8Rzif31Xgrw',
   img: video3img,
  },
  {
   id: 4,
   title: translations.title4,
   subtitle: translations.subtitle4,
   videoLink: 'https://www.youtube.com/watch?v=t1Ja3gSQ7NM',
   img: video4img,
  },
  {
   id: 5,
   title: translations.title5,
   subtitle: translations.subtitle5,
   videoLink: 'https://www.youtube.com/watch?v=NsW97FJ3t94',
   img: video5img,
  },
 ]

 const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  focusOnSelect: true,
  responsive: [
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 2,
     infinite: true,
     dots: false,
    },
   },
   {
    breakpoint: 600,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 2,
     initialSlide: 0,
    },
   },
   {
    breakpoint: 480,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 2,
    },
   },
  ],
 }

 return { items, settings }
}

export default Config
