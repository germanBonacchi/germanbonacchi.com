import styled from "styled-components";

export const Container = styled.div`
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    margin-left: ${({ component }) => (component === "NavBar" ? "40px" : "")};
    margin-top: ${({ component }) => (component === "SideBar" ? "1.2rem" : "")};
    justify-self: ${({ component }) =>
      component === "SideBar" ? "center" : ""};
  }

  label {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    -webkit-tap-highlight-color: transparent;
  }

  .btn-color-mode-switch {
    display: inline-block;
    margin: 0px;
    position: relative;
  }

  .btn-color-mode-switch > label.btn-color-mode-switch-inner {
    margin: 0px;
    width: 100px;
    height: 30px;
    background: #151515;
    border-radius: 26px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    display: block;
  }

  .btn-color-mode-switch > label.btn-color-mode-switch-inner:before {
    content: attr(data-on);
    position: absolute;
    top: 7px;
    right: 20px;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }

  .btn-color-mode-switch > label.btn-color-mode-switch-inner:after {
    content: attr(data-off);
    width: 50px;
    height: 16px;
    background: #a32eff;
    border-radius: 26px;
    position: absolute;
    left: 2px;
    top: 2px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 6px -2px #111;
    padding: 5px 0px;
    color: #fff;
    cursor: pointer;
  }

  .btn-color-mode-switch input[type="checkbox"] {
    cursor: pointer;
    width: 50px;
    height: 25px;
    opacity: 0;
    position: absolute;
    top: 0;
    z-index: 1;
    margin: 0px;
  }

  .btn-color-mode-switch
    input[type="checkbox"]:checked
    + label.btn-color-mode-switch-inner {
    background: #151515;
    color: #fff;
  }

  .btn-color-mode-switch
    input[type="checkbox"]:checked
    + label.btn-color-mode-switch-inner:after {
    content: attr(data-on);
    left: 48px;
    background: #a32eff;
  }

  .btn-color-mode-switch
    input[type="checkbox"]:checked
    + label.btn-color-mode-switch-inner:before {
    content: attr(data-off);
    right: auto;
    left: 20px;
  }

  .btn-color-mode-switch
    input[type="checkbox"]:checked
    + label.btn-color-mode-switch-inner {
    /*background: #66BB6A; */
    /*color: #fff;*/
  }
`;
