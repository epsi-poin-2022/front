import styled from "@emotion/styled";
import React from "react";

const Img = styled.img`
  width: 50vw;
  height: 300px;
  opacity: 0.8;
  @media (min-width: 1020px) {
    width: 45vw;
    height: 60vh;
    opacity: 0.8;
  }
`;
export default function Illustration({ src, title }) {
  return <Img src={src} alt={title} />;
}
