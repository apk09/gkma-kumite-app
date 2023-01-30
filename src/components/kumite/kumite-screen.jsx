import React from 'react';
import styled from 'styled-components';
import AkaScreen from './aka-screen';
import AoScreen from './ao-screen';

const KumiteContainer = styled.div`
  width: 100%;
  display: flex
`;

const AkaContainer = styled.div`
  background-color: #fe0000;
  height: 100vh;
  width: 50%;
`;

const AoContainer = styled.div`
  background-color: #3466ff;
  height: 100vh;
  width: 50%;
`;

const KumiteScreen = () => {
  return (
    <KumiteContainer>
      <AkaContainer>
        <AkaScreen />
      </AkaContainer>
      <AoContainer>
        <AoScreen />
      </AoContainer>
    </KumiteContainer>
  );
}

export default KumiteScreen;