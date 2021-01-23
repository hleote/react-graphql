import styled from "@emotion/styled";

import Container from "./Container";

const StyledAppWrapper = styled.div`
  text-align: center;
  padding: 30px 200px;
`;

function App() {
  return (
    <StyledAppWrapper>
      <Container />
    </StyledAppWrapper>
  );
}

export default App;
