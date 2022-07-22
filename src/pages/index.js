import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import {
  AboutSection,
  SkillSection,
  TrainingsSection,
  ContactSection,
} from "../components/InfoSection";
import Footer from "../components/Footer";
import SectionsData from "../components/InfoSection/Data";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../css/home.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { homeAbout, homeSkills, homeTraining, homeContact } =
    SectionsData();
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="home">
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <AboutSection {...homeAbout} />
      <SkillSection {...homeSkills} />
      <TrainingsSection {...homeTraining} />
      <ContactSection {...homeContact} />
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
  );
};

export default Home;
