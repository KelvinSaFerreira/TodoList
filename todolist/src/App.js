import React from "react";
import GlobalStyle from "./globalStyles";
import MainPage from "./pages/MainPage";
import Header from './components/Header';
import styled from "styled-components";

const Section = styled.section`
    width: 100vw;
    height: 80vh;
`

function App() {
  return (
    <Section>
      <GlobalStyle />
      <Header />
      <MainPage />
    </Section>
  );
}

export default App;
