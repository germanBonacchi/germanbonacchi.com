import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  ImgWrap,
  Img,
} from "./HeroElements";
import ParticlesBackground from "../Particles/ParticleBackground";
import profile from "../../images/profile.jpg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "Hero" });
  const translations = {
    heading: t("heading"),
    name: t("name"),
    subheading: t("subheading"),
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ParticlesBackground />
      </HeroBg>
      <HeroContent>
        <HeroP>{translations.heading}</HeroP>
        <HeroH1>{translations.name}</HeroH1>
        <ImgWrap>
          <Img src={profile} alt="profile" />
        </ImgWrap>
        <HeroP>{translations.subheading}</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
