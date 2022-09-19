import React from "react";
import { HashLoader } from "react-spinners";
import { LoadingContainer, LoadingBg, LoadingContent } from "./LoadingElements";
const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingBg>
        <LoadingContent>
          <HashLoader color="#a32eff" size={100} />
        </LoadingContent>
      </LoadingBg>
    </LoadingContainer>
  );
};

export default Loading;
