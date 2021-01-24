import React from "react";
import styled from "@emotion/styled";

import { respondTo } from './breakPointsMixin.js';

const StyledElementWrapper = styled.div`
  margin: 40px;
  padding-right: 10px;
		padding-left: 10px;
		margin-bottom: 50px;
		width: calc(100% - 85px);

		${respondTo.sm`
    margin: 20px;
  `}
`;



const ElementWrapper = ({ children }) => {
  return <StyledElementWrapper>{children}</StyledElementWrapper>;
};

export default ElementWrapper;
