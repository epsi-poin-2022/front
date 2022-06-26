import styled from "@emotion/styled";
import React from "react";
import { PRIMARY } from "../../utils/Constants";

const DividerStyled = styled.div`
  background-color: ${PRIMARY};
  width: 80%;
  margin: auto;
  height: 3px;
`;
export default function Divider() {
  return <DividerStyled />;
}
