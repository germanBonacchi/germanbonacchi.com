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
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
   <ToastContainer
    position="bottom-left"
    autoClose={4000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    transition={Slide}
   />
  </div>
 )
}

export default Home
