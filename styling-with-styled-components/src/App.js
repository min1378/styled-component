import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button.js";
import theme from "./theme";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBlock>
        <Button>BUTTON</Button>
        <Button color="pink">BUTTON</Button>
        <Button color="gray">BUTTON</Button>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
