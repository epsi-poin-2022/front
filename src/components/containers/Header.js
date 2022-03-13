import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { DARK, LIGHT, PRIMARY } from "../../utils/Constants";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${PRIMARY};
  padding: 20px;
  align-items: center;
  height: 40px;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  color: ${(props) => (props.active ? DARK : LIGHT)};
  padding: 10px 25px;
  margin: 0 10px;
  background-color: ${(props) => props.active && LIGHT};
`;

export default function Header() {
  return (
    <StyledHeader>
      <span>POIN</span>
      <nav>
        <StyledLink to="/" active>
          Home
        </StyledLink>
        <StyledLink to="/">About</StyledLink>
        <StyledLink to="/">Jobs</StyledLink>
        <StyledLink to="/">Resources</StyledLink>
      </nav>
    </StyledHeader>
  );
}
