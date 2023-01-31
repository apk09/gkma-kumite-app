import React, { useRef } from 'react';
import styled from 'styled-components';
import AkaScreen from './aka-screen';
import AoScreen from './ao-screen';
import KumiteTimer from './kumite-timer';

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

const KumiteTimerContainer = styled.div`
  position: absolute;
  left: calc(50% - 200px);
  top: calc(10%);
  background-color: rgba(0,0,0,.5);
  height: 200px;
  width: 400px;
  border: 1px groove #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: monospace;
  font-size: 100px;
`;

const TimerControlButtons = styled.div`
  position: absolute;
  left: calc(50% - 100px);
  top: 60%;
  width: 200px;
  display: inline-grid;
`;

const HajimeButton = styled.button`
  background-color: rgba(0,0,0,.5);
  border: 1px groove #fff;
  color: #fff;
  font-family: monospace;
  font-size: 30px;
  margin-bottom: 10px;
  height: 50px;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px dotted #000;
  }
`;

const YameButton = styled.button`
  background-color: rgba(0,0,0,.5);
  border: 1px groove #fff;
  color: #fff;
  font-family: monospace;
  font-size: 30px;
  height: 50px;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px dotted #000;
  }
`;

const KumiteApp = () => {

  const countdownRef = useRef(null);

  const handleHajime = () => {
    countdownRef.current.start();
  };

  const handleYame = () => {
    countdownRef.current.pause();
  };

  return (
    <KumiteContainer>
      <AkaContainer>
        <AkaScreen />
      </AkaContainer>
      <KumiteTimerContainer>
        <KumiteTimer countdownRef={countdownRef} />
      </KumiteTimerContainer>
      <TimerControlButtons> 
        <HajimeButton onClick={() => handleHajime()}>Hajime</HajimeButton>
        <YameButton onClick={() => handleYame()}>Yame</YameButton>
      </TimerControlButtons>
      <AoContainer>
        <AoScreen />
      </AoContainer>
    </KumiteContainer>
  );
}

export default KumiteApp;