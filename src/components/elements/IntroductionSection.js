import styled from "@emotion/styled";
import React from "react";
import { LIGHT } from "../../utils/Constants";

const BackgroundImage = styled.div`
  background-image: url(img/background.jpeg);
  height: calc(100vh - 80px);
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  // position: relative;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  transform: scale(1.1);
`;

const BackgroundFilter = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  blur: 8px;
`;

const PositionedInfo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 20px;
  text-align: center;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  color: ${LIGHT};
  font-weight: bold;
  border: 3px solid ${LIGHT};
`;

export default function IntroductionSection() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <BackgroundImage />
      <BackgroundFilter />
      <PositionedInfo>
        <h1>Intro</h1>
        <h2>
          Donec rhoncus varius ornare. Praesent sed lacinia nisi. Etiam euismod
          in enim eu ornare. Sed bibendum imperdiet orci, nec venenatis erat
          ultrices vitae. Nunc congue nulla ut nibh iaculis blandit. Aenean
          pulvinar ipsum mauris, non malesuada ipsum luctus sed. Duis vitae
          pretium nunc. Praesent vitae semper lorem. Ut suscipit lobortis
          vehicula. In sodales massa sit amet maximus condimentum.
        </h2>
      </PositionedInfo>
    </div>
  );
}
