import styled from "styled-components";

export const LoadingContainer = styled.div`
  background: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
`;

export const LoadingBg = styled.div`
  margin: 0;
  position: absolute;
  padding-top: 10px;
  top: 40%;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const LoadingContent = styled.div`
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
