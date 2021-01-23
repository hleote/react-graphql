import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  height: auto;
  margin: 0;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  border-width: 1px;
  border-style: solid;
  transition: opacity 120ms ease-in-out, color 120ms ease-in-out,
    background-color 120ms ease-in-out, border-color 120ms ease-in-out;
  background-color: #3063e9;
  border-color: #3063e9;
  color: #fff;
  padding: 8px calc(24px - 1px);
  border-radius: 8px;
  width: 100%;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #234bc3;
    border-color: #234bc3;
  }
  &:active {
    background-color: #1a368e;
    border-color: #1a368e;
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    box-shadow: none;
  }
`;

const Button = ({ children, disabled, onClick }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
