import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { DARK, PRIMARY } from "../../utils/Constants";
const rotate = keyframes`
0% {
  transform: rotate(0deg);
}
0% {
  transform: rotate(360deg);
}`;
const LoaderItem = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  border: 10px solid ${PRIMARY};
  border-top-color: ${DARK};
  box-sizing: border-box;
  background: transparent;
  animation: ${rotate} 1s linear infinite;
  margin: 50px auto;
`;

export default function Loader() {
  return <LoaderItem />;
}
