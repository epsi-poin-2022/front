import styled from "@emotion/styled";
import React from "react";
import {
  HALF_BORDER_RADIUS,
  LIGHT,
  PRIMARY,
  SHADOW,
  TRANSITION,
} from "../../utils/Constants";

const Button = styled.button`
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
  font-size: 1rem;
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
  &:hover {
    color: ${LIGHT};
    background-color: ${PRIMARY};
  }
`;
// const Button = styled.span`
//   padding: 20px 45px;
//   background-color: ${PRIMARY};
//   border-radius: ${HALF_BORDER_RADIUS};
//   color: ${LIGHT};
//   text-transform: uppercase;
//   transition: ${TRANSITION};
//   &:hover {
//     cursor: pointer;
//     box-shadow: ${SHADOW};
//   }
// `;

export default function CustomButton({ title = "", onClick = () => {} }) {
  // return <Button onClick={() => onClick()}>{title}</Button>;
  return (
    <Button onClick={() => onClick()}>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  );
}
