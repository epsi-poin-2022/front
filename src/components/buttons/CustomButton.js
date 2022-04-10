import styled from "@emotion/styled";
import React from "react";
import { HALF_BORDER_RADIUS, LIGHT, PRIMARY } from "../../utils/Constants";

const Button = styled.span`
  padding: 20px 45px;
  background-color: ${PRIMARY};
  border-radius: ${HALF_BORDER_RADIUS} 0px;
  color: ${LIGHT};
  &:hover {
    cursor: pointer;
  }
`;

export default function CustomButton({ title = "", onClick = () => {} }) {
  return <Button onClick={() => onClick()}>{title}</Button>;
}
