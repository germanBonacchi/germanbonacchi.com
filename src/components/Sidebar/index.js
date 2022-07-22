import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

import SocialIcons from "../SocialIcons";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Sidebar = ({ isOpen, toggle }) => {
  const { t } = useTranslation("translation", { keyPrefix: "Section" });
  const translations = {
    about: t("about"),
    skills: t("skills"),
    trainings: t("trainings"),
    contact: t("contact"),
    rights: t("rights"),
  };
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            {translations.about}
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            {translations.skills}
          </SidebarLink>
          <SidebarLink to="trainings" onClick={toggle}>
            {translations.trainings}
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            {translations.contact}
          </SidebarLink>
          <SocialIcons component="SideBar" />
          <LanguageSwitcher component="SideBar" toggle={toggle} />
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
