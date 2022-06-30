import video1img from '../../../images/video1img.jpg'
import video2img from '../../../images/video2img.jpg'
import video3img from '../../../images/video3img.jpg'

export const items = [
 {
  id: 1,
  title: 'Ciclo de Vida',
  videoLink: 'https://www.youtube.com/watch?v=WjRuhuWnqeo',
  img: video1img,
 },
 {
  id: 2,
  title: 'Tech1',
  videoLink: 'https://www.youtube.com/watch?v=EjZpzq3yl6c',
  img: video2img,
 },
 {
  id: 3,
  title: 'Tech2',
  videoLink: 'https://www.youtube.com/watch?v=FrRqouiu6jE',
  img: video3img,
 },
 {
  id: 4,
  title: 'Tech3',
  videoLink: 'https://www.youtube.com/watch?v=WjRuhuWnqeo',
  img: video1img,
 },
]

export const settings = {
 dots: true,
 infinite: false,
 speed: 500,
 slidesToShow: 3,
 slidesToScroll: 2,
 initialSlide: 0,
 responsive: [
  {
   breakpoint: 1024,
   settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true,
   },
  },
  {
   breakpoint: 600,
   settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 2,
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
