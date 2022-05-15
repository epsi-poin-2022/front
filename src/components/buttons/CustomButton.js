import styled from "@emotion/styled";
import React from "react";
import {
  BORDER_RADIUS,
  LIGHT,
  PRIMARY,
  TRANSITION,
} from "../../utils/Constants";

const Button = styled.button`
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  // margin: 0px 25px 15px;
  min-width: 150px;
`;
const ButtonTitle = styled.span`
  position: relative;
  display: inline-block;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  transition: ${TRANSITION};
  color: ${PRIMARY};
  border: 1px solid ${PRIMARY};
  border-radius: ${BORDER_RADIUS}px;
  &:hover {
    color: ${LIGHT};
    background-color: ${PRIMARY};
  }
`;

export default function CustomButton({ title = "", onClick = () => {} }) {
  return (
    <Button onClick={() => onClick()}>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  );
}
