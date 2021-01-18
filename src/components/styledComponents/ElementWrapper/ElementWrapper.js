import React from "react";
import styled from "@emotion/styled";

const StyledElementWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px;
		padding-left: 10px;
		margin-bottom: 50px;
		width: 100%;
`;

const ElementWrapper = ({ children }) => {
  return <StyledElementWrapper>{children}</StyledElementWrapper>;
};

export default ElementWrapper;
