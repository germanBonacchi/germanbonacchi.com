import video1img from '../../../images/video1img.jpg'
import video2img from '../../../images/video2img.jpg'
import video3img from '../../../images/video3img.jpg'
import video4img from '../../../images/video4img.jpg'

export const items = [
 {
  id: 0,
  title: 'Ciclo de Vida',
  videoLink: 'https://www.youtube.com/watch?v=WjRuhuWnqeo',
  img: video1img,
 },
 {
  id: 1,
  title: 'TechTrainingLatam1',
  videoLink: 'https://www.youtube.com/watch?v=EjZpzq3yl6c',
  img: video2img,
 },
 {
  id: 2,
  title: 'TechTrainingLatam2',
  videoLink: 'https://www.youtube.com/watch?v=FrRqouiu6jE',
  img: video3img,
 },
 {
  id: 3,
  title: 'TechTrainingLatam3',
  videoLink: 'https://www.youtube.com/watch?v=8Rzif31Xgrw',
  img: video4img,
 },
]

export const settings = {
 dots: false,
 infinite: false,
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
    infinite: false,
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
    slidesToShow: 1,
    slidesToScroll: 1,
   },
  },
 ],
}
