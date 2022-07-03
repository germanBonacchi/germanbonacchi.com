import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import {
 AboutSection,
 SkillSection,
 TrainingsSection,
 ContactSection,
} from '../components/InfoSection'
import Footer from '../components/Footer'
import {
 homeObjAbout,
 homeObjSkills,
 homeObjTraining,
 homeObjContact,
} from '../components/InfoSection/Data'

import '../css/home.css'

const Home = () => {
 const [isOpen, setIsOpen] = useState(false)

 const toggle = () => {
  setIsOpen(!isOpen)
 }
 return (
  <div className="home">
   <Sidebar isOpen={isOpen} toggle={toggle} />
   <Navbar toggle={toggle} />
   <HeroSection />
   <AboutSection {...homeObjAbout} />
   <SkillSection {...homeObjSkills} />
   <TrainingsSection {...homeObjTraining} />
   <ContactSection {...homeObjContact} />
   <Footer />
  </div>
 )
}

export default Home
