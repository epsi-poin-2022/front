import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  overflow: hidden;
  height: calc(100vh - 80px);
  position: relative;
  align-items: center;
  justify-content: space-around;
`;
const InfoContainer = styled.div`
  width: 45vw;
`;
const Info = styled.div`
  width: 70%;
  margin-left: auto;
`;
const Illustration = styled.img`
  width: 45vw;
  height: 60vh;
  opacity: 0.8;
`;

export default function IntroductionSection() {
  return (
    <Container>
      <InfoContainer>
        <Info>
          <h1>Présente le numérique</h1>
          <h2>
            Donec rhoncus varius ornare. Praesent sed lacinia nisi. Etiam
            euismod in enim eu ornare. Sed bibendum imperdiet orci, nec
            venenatis erat ultrices vitae. Nunc congue nulla ut nibh iaculis
            blandit. Aenean pulvinar ipsum mauris, non malesuada ipsum luctus
            sed. Duis vitae pretium nunc. Praesent vitae semper lorem. Ut
            suscipit lobortis vehicula. In sodales massa sit amet maximus
            condimentum.
          </h2>
        </Info>
      </InfoContainer>
      <Illustration src="img/nomad.svg" />
    </Container>
  );
}
