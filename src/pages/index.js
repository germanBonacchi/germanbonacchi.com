import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import {
 InfoSection,
 AboutSection,
 SkillSection,
 TrainingsSection,
} from '../components/InfoSection'
import Footer from '../components/Footer'
import {
 homeObjAbout,
 homeObjSkills,
 homeObjTraining,
} from '../components/InfoSection/Data'

import '../css/home.css'

const Home = () => {
 const [isOpen, setIsOpen] = useState(false)

 const toggle = () => {
  setIsOpen(!isOpen)
 }
 return (
  <>
   <Sidebar isOpen={isOpen} toggle={toggle} />
   <Navbar toggle={toggle} />
   <HeroSection />
   <AboutSection {...homeObjAbout} />
   <SkillSection {...homeObjSkills} />
   <TrainingsSection {...homeObjTraining} />
   <InfoSection {...homeObjSkills} />
   <Footer />
  </>
 )
}

export default Home
