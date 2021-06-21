import React from "react";
import styled from "@emotion/styled";

import { Header } from "../../components";

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;
