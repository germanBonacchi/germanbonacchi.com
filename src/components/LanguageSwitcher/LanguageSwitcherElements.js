import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: ${({ component }) => (component === "NavBar" ? "40px" : "")};
  margin-top: ${({ component }) => (component === "SideBar" ? "1.2rem" : "")};
  justify-self: ${({ component }) => (component === "SideBar" ? "center" : "")};
  color: #fff;

  .sl-nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    display: inline-block;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    -webkit-tap-highlight-color: transparent;
  }
  .sl-nav li {
    cursor: pointer;
  }
  .sl-nav li:hover {
    color: #a32eff;
    transition: 0.2s ease-out;
  }
  .sl-nav li.open {
    color: #a32eff;
  }
  .sl-nav li ul {
    display: none;
  }
  .sl-nav li.open ul {
    position: absolute;
    top: 29px;
    right: -15px;
    display: block;
    width: 150px;
    padding-top: 0px;
    z-index: 1;
    border-radius: 5px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    background: #363636;
    -webkit-tap-highlight-color: transparent;
  }
  .sl-nav li.open .triangle {
    position: absolute;
    top: 15px;
    right: -7px;
    z-index: 10;
    height: 14px;
    overflow: hidden;
    width: 30px;
    background: transparent;
  }
  .sl-nav li.open .triangle:after {
    content: "";
    display: block;
    z-index: 20;
    width: 15px;
    transform: rotate(45deg) translateY(0px) translatex(10px);
    height: 15px;
    background: #363636;
    border-radius: 2px 0px 0px 0px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
  .sl-nav li ul li {
    position: relative;
    text-align: left;
    background: transparent;
    padding: 15px 15px;
    padding-bottom: 0;
    z-index: 2;
    font-size: 15px;
    color: #fff;
    -webkit-tap-highlight-color: transparent;
  }
  .sl-nav li ul li:last-of-type {
    padding-bottom: 15px;
  }
  .sl-nav li ul li span {
    padding-left: 5px;
  }
  .sl-nav li ul li span:hover {
    color: #a32eff;
    transition: 0.2s ease-out;
  }
  .sl-flag {
    display: inline-block;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
    width: 15px;
    height: 15px;
    background: #aaa;
    border-radius: 50%;
    position: relative;
    top: 2px;
    overflow: hidden;
  }
  .flag-gbr {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url("https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png");
  }
  .flag-esp {
    background: url("https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png");
    background-size: cover;
    background-position: center center;
  }
`;
