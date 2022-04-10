import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  HALF_BORDER_RADIUS,
  LIGHT,
  PRIMARY,
  TRANSITION,
} from "../../utils/Constants";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${PRIMARY};
  padding: 20px;
  align-items: center;
  height: 40px;
  z-index: 10;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  color: ${(props) => (props.active ? PRIMARY : LIGHT)};
  padding: 10px 35px;
  border-radius: ${HALF_BORDER_RADIUS} 0;
  margin: 0 10px;
  background-color: ${(props) => props.active && LIGHT};
  &:hover {
    background-color: ${LIGHT};
    color: ${PRIMARY};
  }
  transition: ${TRANSITION};
`;

export default function Header() {
  return (
    <StyledHeader>
      <span>Présente le numérique</span>
      <nav>
        <StyledLink to="/" active>
          Home
        </StyledLink>
        <StyledLink to="/">About</StyledLink>
        <StyledLink to="/">Jobs</StyledLink>
        <StyledLink to="/">Resources</StyledLink>
      </nav>
      <span></span>
    </StyledHeader>
  );
}
