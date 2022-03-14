import styled from "@emotion/styled";
import React from "react";

const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export default function IconButton({
  path = "",
  alt = "",
  onClick = () => {},
}) {
  return <StyledIcon src={path} onClick={onClick} alt={alt} />;
}
