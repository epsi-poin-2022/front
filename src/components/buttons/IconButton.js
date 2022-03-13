import styled from "@emotion/styled";
import React from "react";

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export default function IconButton({
  path = "",
  alt = "",
  onClick = () => {},
}) {
  return <Icon src={path} onClick={onClick} alt={alt} />;
}
