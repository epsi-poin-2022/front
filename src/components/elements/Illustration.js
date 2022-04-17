import styled from "@emotion/styled";
import React from "react";

const Img = styled.img`
  width: 45vw;
  height: 60vh;
  opacity: 0.8;
`;
export default function Illustration({ src, title }) {
  return <Img src={src} alt={title} />;
}
