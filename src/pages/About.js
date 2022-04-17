import styled from "@emotion/styled";
import React from "react";
import Illustration from "../components/elements/Illustration";
import Title from "../components/elements/Title";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  overflow: hidden;
  height: 50vh;
  position: relative;
  align-items: center;
  justify-content: space-around;
  padding-block: 50px;
`;

const InfoContainer = styled.div`
  width: 45vw;
`;

const Info = styled.div`
  width: 70%;
  margin: auto;
`;

const rows = [
  {
    title: "Partie 1",
    text: "Donec rhoncus varius ornare. Praesent sed lacinia nisi. Etiam euismod in enim eu ornare. Sed bibendum imperdiet orci, nec venenatis erat ultrices vitae. Nunc congue nulla ut nibh iaculis blandit. Aenean pulvinar ipsum mauris, non malesuada ipsum luctus sed. Duis vitae pretium nunc. Praesent vitae semper lorem. Ut suscipit lobortis vehicula. In sodales massa sit amet maximus condimentum.",
    img: "/img/web.svg",
    imgLabel: "Web",
  },
  {
    title: "Partie 2",
    text: "Donec rhoncus varius ornare. Praesent sed lacinia nisi. Etiam euismod in enim eu ornare. Sed bibendum imperdiet orci, nec venenatis erat ultrices vitae. Nunc congue nulla ut nibh iaculis blandit. Aenean pulvinar ipsum mauris, non malesuada ipsum luctus sed. Duis vitae pretium nunc. Praesent vitae semper lorem. Ut suscipit lobortis vehicula. In sodales massa sit amet maximus condimentum.",
    img: "/img/world.svg",
    imgLabel: "World",
  },
];
export default function About() {
  return (
    <>
      <Title title="About" />
      {rows.map((row, i) => (
        <Container reverse={i % 2 !== 0 ? true : false} key={`row-uid-${i}`}>
          <InfoContainer>
            <Info>
              <h2>{row.title}</h2>
              <p>{row.text}</p>
            </Info>
          </InfoContainer>
          <Illustration src={row.img} title={row.imgLabel} />
        </Container>
      ))}
    </>
  );
}
