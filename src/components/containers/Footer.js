import styled from "@emotion/styled";
import React from "react";
import { PRIMARY } from "../../utils/Constants";
const StyledFooter = styled.footer`
  width: 100%;
  height: 180px;
  background-color: ${PRIMARY};
`;
export default function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}
