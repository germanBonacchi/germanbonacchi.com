import styled from "styled-components";

export const Container = styled.div`
  .switch {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-left: ${({ component }) => (component === "NavBar" ? "40px" : "")};
    margin-top: ${({ component }) => (component === "SideBar" ? "1.2rem" : "")};
    justify-self: ${({ component }) =>
      component === "SideBar" ? "center" : ""};
    color: #fff;
  }

  .switch > span {
    position: absolute;
    pointer-events: none;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    width: 55%;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    -webkit-tap-highlight-color: transparent;
  }

  input.check-toggle-round-flat:checked ~ .off {
    color: #fff;
  }

  input.check-toggle-round-flat:checked ~ .on {
    color: #fff;
  }

  .switch > span.on {
    left: 0;
    color: #fff;
  }

  .switch > span.off {
    right: 0;
    color: #fff;
  }

  .check-toggle {
    position: absolute;
    margin-left: -9999px;
    visibility: hidden;
  }
  .check-toggle + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input.check-toggle-round-flat + label {
    padding: 2px;
    width: 97px;
    height: 35px;
    background-color: #363636;
    -webkit-border-radius: 60px;
    -moz-border-radius: 60px;
    -ms-border-radius: 60px;
    -o-border-radius: 60px;
    border-radius: 60px;
  }
  input.check-toggle-round-flat + label:before,
  input.check-toggle-round-flat + label:after {
    display: block;
    position: absolute;
    content: "";
  }

  input.check-toggle-round-flat + label:before {
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    background-color: #1e1e1e;

    -moz-border-radius: 60px;
    -ms-border-radius: 60px;
    -o-border-radius: 60px;
    border-radius: 60px;
  }
  input.check-toggle-round-flat + label:after {
    top: 4px;
    left: 4px;
    bottom: 4px;
    width: 45px;
    background-color: #a32eff;
    -webkit-border-radius: 52px;
    -moz-border-radius: 52px;
    -ms-border-radius: 52px;
    -o-border-radius: 52px;
    border-radius: 52px;
    -webkit-transition: margin 0.2s;
    -moz-transition: margin 0.2s;
    -o-transition: margin 0.2s;
    transition: margin 0.2s;
  }

  input.check-toggle-round-flat:checked + label {
  }

  input.check-toggle-round-flat:checked + label:after {
    margin-left: 44px;
  }
`;
