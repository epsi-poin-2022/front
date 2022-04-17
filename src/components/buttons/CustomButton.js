import styled from "@emotion/styled";
import React from "react";
import {
  HALF_BORDER_RADIUS,
  LIGHT,
  PRIMARY,
  SHADOW,
  TRANSITION,
} from "../../utils/Constants";

const Button = styled.span`
  padding: 20px 45px;
  background-color: ${PRIMARY};
  border-radius: ${HALF_BORDER_RADIUS};
  color: ${LIGHT};
  text-transform: uppercase;
  transition: ${TRANSITION};
  &:hover {
    cursor: pointer;
    box-shadow: ${SHADOW};
  }
`;

export default function CustomButton({ title = "", onClick = () => {} }) {
  return <Button onClick={() => onClick()}>{title}</Button>;
}
