import React from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
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
  background-color: ${LIGHT};
  padding: 20px;
  align-items: center;
  height: 40px;
  z-index: 10;
  box-shadow: 0px 1px 10px #999;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  color: ${(props) => (props.active ? LIGHT : PRIMARY)};
  padding: 10px 35px;
  border-radius: ${HALF_BORDER_RADIUS};
  margin: 0 10px;
  background-color: ${(props) => props.active && PRIMARY};
  &:hover {
    background-color: ${PRIMARY};
    color: ${LIGHT};
  }
  transition: ${TRANSITION};
`;

export default function Header() {
  const location = useLocation();
  const isActive = (route) => {
    if (route === "/") return location.pathname === "/";
    return location.pathname.includes(route);
  };
  return (
    <StyledHeader>
      <span>Présente le numérique</span>
      <nav>
        <StyledLink to="/" active={isActive("/")}>
          Home
        </StyledLink>
        <StyledLink to="/about" active={isActive("/about")}>
          About
        </StyledLink>
        <StyledLink to="/jobs" active={isActive("/jobs")}>
          Jobs
        </StyledLink>
        <StyledLink to="/resources" active={isActive("/resources")}>
          Resources
        </StyledLink>
      </nav>
      <span></span>
    </StyledHeader>
  );
}
