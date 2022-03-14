import styled from "@emotion/styled";
import React from "react";
import { LIGHT, PRIMARY } from "../../utils/Constants";

const Button = styled.span`
  padding: 20px 45px;
  background-color: ${PRIMARY};
  color: ${LIGHT};
  &:hover {
    cursor: pointer;
  }
`;

export default function CustomButton({ title = "", onClick = () => {} }) {
  return <Button onClick={() => onClick()}>{title}</Button>;
}
