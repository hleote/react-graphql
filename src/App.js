import styled from "@emotion/styled";

import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./containers/Container";
import ElementWrapper from "./components/styledComponents/ElementWrapper";

const StyledAppWrapper = styled.div`
  text-align: center;
  padding: 30px 200px;
`;

function App() {
  return (
    <StyledAppWrapper>
      <Container>
        <ElementWrapper>
          <Input />
        </ElementWrapper>
        <ElementWrapper>
          <Button>I'm a button</Button>
        </ElementWrapper>
      </Container>
    </StyledAppWrapper>
  );
}

export default App;
