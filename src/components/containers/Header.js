import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import {
  BORDER_RADIUS,
  LIGHT,
  PRIMARY,
  SHADOW,
  TRANSITION,
} from "../../utils/Constants";
import {
  APP_TITLE,
  HEADER_ABOUT,
  HEADER_HOME,
  HEADER_JOBS,
  HEADER_RESOURCES,
} from "../../utils/ApplicationText";

import { slide as Menu } from "react-burger-menu";
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${LIGHT};
  padding: 20px;
  align-items: center;
  height: 80px;
  z-index: 10;
  box-shadow: 0px 1px 10px #999;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 20px;
  @media (in-width: 1020px) {
    margin-inline: 20px;
  }
  @media (max-width: 1020px) {
    margin-block: 20px;
  }
  // min-width: 200px;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: ${BORDER_RADIUS}px;
  transition: ${TRANSITION};
  color: ${(props) => (props.active ? LIGHT : PRIMARY)};
  background-color: ${(props) => (props.active ? PRIMARY : LIGHT)};
  border: 1px solid ${(props) => (props.active ? LIGHT : PRIMARY)};
  &:hover {
    color: ${LIGHT};
    background-color: ${PRIMARY};
  }
`;

const DesktopNav = styled.nav`
  display: none;
  @media (min-width: 1020px) {
    display: block;
  }
`;
const MobileNav = styled.nav`
  display: block;
  @media (min-width: 1020px) {
    display: none;
  }
`;
export default function Header() {
  const location = useLocation();
  const isActive = (route) => {
    if (route === "/") return location.pathname === "/";
    return location.pathname.includes(route);
  };
  const [isOpen, setIsOpen] = useState(false);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const menuRef = useRef(null);
  useOutsideAlerter(menuRef);

  return (
    <StyledHeader>
      <StyledLink to="/" active>
        {APP_TITLE}
      </StyledLink>
      {/* <span>{APP_TITLE}</span> */}
      <DesktopNav>
        <StyledLink to="/" active={isActive("/")}>
          {HEADER_HOME}
        </StyledLink>
        <StyledLink to="/about" active={isActive("/about")}>
          {HEADER_ABOUT}
        </StyledLink>
        <StyledLink to="/jobs" active={isActive("/jobs")}>
          {HEADER_JOBS}
        </StyledLink>
        <StyledLink to="/resources" active={isActive("/resources")}>
          {HEADER_RESOURCES}
        </StyledLink>
      </DesktopNav>
      {/* <span></span> */}
      <MobileNav ref={menuRef}>
        <Menu
          onOpen={() => setIsOpen(true)}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          right
          pageWrapId={"page-wrap"}
          styles={{
            bmBurgerButton: {
              position: "fixed",
              width: "36px",
              height: "30px",
              right: "36px",
              top: "25px",
            },
            bmBurgerBars: {
              background: PRIMARY,
            },
            bmBurgerBarsHover: {
              background: "#a90000",
            },
            bmCrossButton: {
              height: "24px",
              width: "24px",
            },
            bmCross: {
              background: PRIMARY,
            },
            bmMenuWrap: {
              position: "fixed",
              height: "100%",
              top: 0,
            },
            bmMenu: {
              background: LIGHT,
              padding: "2.5em 1.5em 0",
              fontSize: "1.15em",
              boxShadow: SHADOW,
            },
            bmMorphShape: {
              fill: "#373a47",
            },
            bmItemList: {
              color: "#b8b7ad",
              padding: "0.8em",
            },
            bmItem: {
              display: "inline-block",
            },
            bmOverlay: {
              background: "rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <StyledLink
              to="/"
              active={isActive("/")}
              onClick={() => setIsOpen(false)}
            >
              {HEADER_HOME}
            </StyledLink>
            <StyledLink
              to="/about"
              active={isActive("/about")}
              onClick={() => setIsOpen(false)}
            >
              {HEADER_ABOUT}
            </StyledLink>
            <StyledLink
              to="/jobs"
              active={isActive("/jobs")}
              onClick={() => setIsOpen(false)}
            >
              {HEADER_JOBS}
            </StyledLink>
            <StyledLink
              to="/resources"
              active={isActive("/resources")}
              onClick={() => setIsOpen(false)}
            >
              {HEADER_RESOURCES}
            </StyledLink>
          </nav>
        </Menu>
      </MobileNav>
    </StyledHeader>
  );
}
