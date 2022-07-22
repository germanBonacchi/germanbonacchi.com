import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "./LanguageSwitcherElements";

const LanguageSwitcher = ({ component, toggle }) => {
  const { i18n } = useTranslation();
  const handleChange = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
    //toggle && toggle();
  };

  return (
    <Container component={component}>
      <div className="btn-container">
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            onChange={handleChange}
            checked={i18n.language !== "en"}
          />
          <label
            htmlFor="color_mode"
            data-on="ES"
            data-off="EN"
            className="btn-color-mode-switch-inner"
          ></label>
        </label>
      </div>
    </Container>
  );
};

export default LanguageSwitcher;
