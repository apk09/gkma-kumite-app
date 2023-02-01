import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0%;
  background: #000;
  width: 100%;
`;

const HeaderText = styled.p`
  color: #fff;
  font-family: Verdana;
  font-weight: bold;
`;

const GkmaHeader = () => {
  return (
    <HeaderContainer>
      <HeaderText>Goju-Ryu Karate-Do Martial Arts Association (G.K.M.A)</HeaderText>
    </HeaderContainer>
  );
};

export default GkmaHeader;
