import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
import {
  NavWrapper
} from "./LanguageSwitcherElements";

const LanguageSwitcher = ({ component, toggle, sidebarIsOpen }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    console.log(e.currentTarget.dataset.id);
    i18n.changeLanguage(e.currentTarget.dataset.id);
    toggle && toggle();
  };
  useEffect(() => {
    if (!sidebarIsOpen) {
      setOpen(false);
    }
  }
  , [sidebarIsOpen]);
  return (
      <NavWrapper component={component}>
        <div class="sl-nav">
          <ul>
            <li class={open ? 'open' : ''} onClick={() => setOpen(!open)}>
              <b>
                {i18n.language === "en"
                  ? "English▼"
                  : i18n.language === "es"
                  ? "Español▼"
                  : ""}
              </b>{" "}
              <i class="fa fa-angle-down" aria-hidden="true"></i>
              <div class="triangle"></div>
              <ul>
                <li onClick={handleChange} data-id="en">
                  <i class="sl-flag flag-gbr">
                    <div id="english"></div>
                  </i>{" "}
                  <span class={i18n.language === "en" ? 'active' : ''}>English</span>
                </li>
                <li onClick={handleChange} data-id="es">
                  <i class="sl-flag flag-esp">
                    <div id="español"></div>
                  </i>{" "}
                  <span class={i18n.language === "es" ? 'active' : ''}>Español</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </NavWrapper>
  );
};

export default LanguageSwitcher;
