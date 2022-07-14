import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
} from "./LanguageSwitcherElements";

const LanguageSwitcher = ({ component, toggle }) => {
  const { i18n } = useTranslation();
  const handleChange = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
    toggle && toggle();
  };

  return (
      <Container component={component}>
        <div className="switch">
          <input
            id="language-toggle"
            className="check-toggle check-toggle-round-flat"
            type="checkbox"
            onClick={handleChange}
            defaultChecked={i18n.language !== "en"}
          />
          <label htmlFor="language-toggle"></label>
          <span data-id="en" className="on">
            EN
          </span>
          <span data-id="es" className="off">
            ES
          </span>
        </div>
      </Container>
  );
};

export default LanguageSwitcher;
