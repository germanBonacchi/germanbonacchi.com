import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import {
 InfoSection,
 AboutSection,
 SkillSection,
} from '../components/InfoSection'
import Footer from '../components/Footer'
import {
 homeObjAbout,
 homeObjSkills,
 homeObjThree,
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
   <InfoSection {...homeObjThree} />
   <Footer />
  </>
 )
}

export default Home
