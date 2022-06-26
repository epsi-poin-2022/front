import styled from "@emotion/styled";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function AppContainer({ children }) {
  return (
    <StyledContainer>
      <Header />
      <main style={{ minHeight: "calc(100vh - 260px)" }} id="page-wrap">
        {children}
      </main>
      <Footer />
    </StyledContainer>
  );
}
