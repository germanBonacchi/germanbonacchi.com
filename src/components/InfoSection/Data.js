import svg1 from "../../images/svg-1.svg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("translation", { keyPrefix: "About" });
  const translations = {
    topLine: t("topLine"),
    description: t("description"),
    heading1: t("heading1"),
    heading2: t("heading2"),
    heading3: t("heading3"),
    heading4: t("heading4"),
    heading5: t("heading5"),
    heading6: t("heading6"),
  };
  const homeAbout = {
    id: "about",
    lightBg: false,
    lightHeading: true,
    lightDesc: true,
    topLine: translations.topLine,
    description: translations.description,
    imgStart: false,
    img: svg1,
    alt: "developer",
    buttonLabel: "",
    primary: true,
    dark: true,
    heading1: translations.heading1,
    heading2: translations.heading2,
    heading3: translations.heading3,
    heading4: translations.heading4,
    heading5: translations.heading5,
    heading6: translations.heading6,
  };

  return homeAbout;
};

const Skills = () => {
  const { t } = useTranslation("translation", { keyPrefix: "Skills" });
  const translations = {
    topLine: t("topLine"),
    description: t("description"),
    description2: t("description2"),
    description3: t("description3"),
    description4: t("description4"),
  };
  const homeSkills = {
    id: "skills",
    lightBg: true,
    lightHeading: false,
    lightDesc: false,
    topLine: translations.topLine,
    description: translations.description,
    description2: translations.description2,
    description3: translations.description3,
    description4: translations.description4,
    imgStart: true,
    skills: [
      "C++",
      "Java",
      "Visual Basic",
      "Oracle Database",
      "Oracle APEX",
      "PL/SQL",
      "JavaScript",
      "TypeScript",
      "React with Hooks",
      "GraphQL",
      "NodeJS",
      "git",
      "Scrum",
    ],
    buttonLabel: "",
    primary: false,
    dark: false,
  };
  return homeSkills;
};

const Trainings = () => {
  const { t } = useTranslation("translation", { keyPrefix: "Trainings" });
  const translations = {
    topLine: t("topLine"),
    heading: t("heading"),
    description: t("description"),
  };
  const homeTraining = {
    id: "trainings",
    lightBg: false,
    lightHeading: true,
    lightDesc: true,
    topLine: translations.topLine,
    heading: translations.heading,
    description: translations.description,
    imgStart: false,
    alt: "",
    buttonLabel: "",
    primary: true,
    dark: true,
  };
  return homeTraining;
};

const Contact = () => {
  const homeContact = {
    id: "contact",
    lightBg: true,
    imgStart: true,
  };
  return homeContact;
};

const SectionsData = () => {
  const homeAbout = About();
  const homeSkills = Skills();
  const homeTraining = Trainings();
  const homeContact = Contact();

  return { homeAbout, homeSkills, homeTraining, homeContact };
};

export default SectionsData;
