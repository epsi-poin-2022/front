import styled from "@emotion/styled";
import React from "react";

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  padding: 4rem 5vw;
`;
export default function GridContainer({ children }) {
  return <GridStyle>{children}</GridStyle>;
}
