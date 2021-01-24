import React from "react";
import styled from "@emotion/styled";

import Container from "./Container";
import { respondTo } from "./components/styledComponents/breakPointsMixin.js";

const StyledAppWrapper = styled.div`
  text-align: center;
  padding: 30px 200px;

  ${respondTo.sm`
			padding: 30px 100px;
		`}
`;

function App() {
  return (
    <StyledAppWrapper>
      <Container />
    </StyledAppWrapper>
  );
}

export default App;
