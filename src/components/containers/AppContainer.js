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
      <main>{children}</main>
      <Footer />
    </StyledContainer>
  );
}
