import styled from "@emotion/styled";
import React from "react";
import { FOOTER_TEXT } from "../../utils/ApplicationText";
import { PRIMARY } from "../../utils/Constants";
const StyledFooter = styled.footer`
  width: 100%;
  // height: 180px;
  padding: 20px 0;
  background-color: ${PRIMARY};
`;
export default function Footer() {
  return (
    <StyledFooter>
      <p style={{ textAlign: "center" }}>{FOOTER_TEXT}</p>
    </StyledFooter>
  );
}
