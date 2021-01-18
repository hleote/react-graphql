import React from "react";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 0 1px rgba(12, 15, 20, 0.07), 0 0 1px 0 rgba(12, 15, 20, 0.07),
    0 2px 2px 0 rgba(12, 15, 20, 0.07);
  padding: 16px 24px;
  padding: 32px;
  margin-bottom: 24px;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
