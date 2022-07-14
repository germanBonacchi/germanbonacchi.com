import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: ${({ component }) => (component === "NavBar" ? "40px" : "")};
  margin-top: ${({ component }) => (component === "SideBar" ? "1.2rem" : "")};
  justify-self: ${({ component }) => (component === "SideBar" ? "center" : "")};
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  color: #fff;
`;
