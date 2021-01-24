import React from "react";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  background-color: #fff;
  border: none;
  outline: 0;
  border-radius: 8px;
  padding: calc(8px + 1px) 12px;
  transition: box-shadow 120ms ease-in-out, padding 120ms ease-in-out;
  width: calc(100% - 85px);
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  box-shadow: 0 0 0 1px #999;
  &:focus {
    box-shadow: 0 0 0 2px #3063e9;
  }
`;

const Input = ({ onChange, value }) => {
  return (
    <StyledInput
      placeholder="Please enter a whole number"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
