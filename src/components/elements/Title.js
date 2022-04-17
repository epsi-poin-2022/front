import styled from "@emotion/styled";
import React from "react";

const H1 = styled.h1`
  text-align: center;
  text-transform: uppercase;
  padding-block: 50px;
`;
export default function Title({ title = "" }) {
  return <H1>{title}</H1>;
}
