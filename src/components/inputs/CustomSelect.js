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
const Select = styled.select`
  padding: 0px 5px;
  font-family: inherit;
  font-size: inherit;
`;

export default function CustomSelect({
  label = "",
  dataArr = [],
  setState = () => {},
  ...props
}) {
  return (
    <Container {...props}>
      <Label>{label}</Label>
      <Select
        onChange={(e) =>
          setState(
            Array.from(e.target.selectedOptions, (option) => option.value)
          )
        }
        multiple
      >
        {dataArr.map((data) => (
          <option value={data.value}>{data.label}</option>
        ))}
      </Select>
    </Container>
  );
}
