import styled from "@emotion/styled";
import React from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-block-end: 20px;
`;
const Label = styled.label`
  font-size: 1.2rem;
  padding-bottom: 10px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 15px 5px;
  font-family: inherit;
  font-size: inherit;
`;

export default function CustomInput({
  label = "",
  type = "text",
  setState = () => {},
  ...props
}) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={type}
        onChange={(e) => setState(e.target.value)}
        {...props}
      />
    </Container>
  );
}
