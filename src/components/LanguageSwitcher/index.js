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
        <div className="sl-nav">
          <ul>
            <li className={open ? 'open' : ''} onClick={() => setOpen(!open)}>
              <b>
                {i18n.language === "en"
                  ? "English▼"
                  : i18n.language === "es"
                  ? "Español▼"
                  : ""}
              </b>{" "}
              <i className="fa fa-angle-down" aria-hidden="true"></i>
              <div className="triangle"></div>
              <ul>
                <li onClick={handleChange} data-id="en">
                  <i className="sl-flag flag-gbr">
                    <div id="english"></div>
                  </i>{" "}
                  <span className={i18n.language === "en" ? 'active' : ''}>English</span>
                </li>
                <li onClick={handleChange} data-id="es">
                  <i className="sl-flag flag-esp">
                    <div id="español"></div>
                  </i>{" "}
                  <span className={i18n.language === "es" ? 'active' : ''}>Español</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </NavWrapper>
  );
};

export default LanguageSwitcher;
