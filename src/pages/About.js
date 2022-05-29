import styled from "@emotion/styled";
import React from "react";
import Illustration from "../components/elements/Illustration";
import {
  ABOUT_FIRST_PARAGRAPH,
  ABOUT_FIRST_TITLE,
  ABOUT_SECOND_PARAGRAPH,
  ABOUT_SECOND_TITLE,
} from "../utils/ApplicationText";

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
    title: ABOUT_FIRST_TITLE,
    text: ABOUT_FIRST_PARAGRAPH,
    img: "/img/web.svg",
    imgLabel: "Web",
  },
  {
    title: ABOUT_SECOND_TITLE,
    text: ABOUT_SECOND_PARAGRAPH,
    img: "/img/world.svg",
    imgLabel: "World",
  },
];
export default function About() {
  return (
    <div style={{ paddingBlock: 50 }}>
      {rows.map((row, i) => (
        <Container reverse={i % 2 !== 0 ? true : false} key={`row-uid-${i}`}>
          <InfoContainer>
            <Info>
              <h2>{row.title}</h2>
              <p style={{ paddingTop: 10 }}>{row.text}</p>
            </Info>
          </InfoContainer>
          <Illustration src={row.img} title={row.imgLabel} />
        </Container>
      ))}
    </div>
  );
}
