import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Select, Option } from "./LanguageSwitcherElements";

const LanguageSwitcher = ({ component, toggle }) => {
  const { i18n } = useTranslation();
  
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    toggle && toggle();
  };

  return (
    <Container component={component}>
      <Select
        value={i18n.language}
        defaultValue={i18n.language}
        onChange={handleChange}
      >
        <Option value="en">English</Option>
        <Option value="es">Español</Option>
      </Select>
    </Container>
  );
};

export default LanguageSwitcher;
