import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import GkmaFooter from '../shared/gkma-footer';
import GkmaHeader from '../shared/gkma-header';
import AkaScreen from './aka-screen';
import AoScreen from './ao-screen';
import KumiteTimer from './kumite-timer';
import KumiteTimerOptions from './kumite-timer-options';

const KumiteContainer = styled.div`
  width: 100%;
  display: flex;
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

const KumiteTimerOptionsContainer = styled.div`
  position: absolute;
  top: 10%;
  left: calc(50% - 175px);
  width: 350px;
  .disabled {
    cursor: not-allowed;
  }
`;

const KumiteTimerContainer = styled.div`
  position: absolute;
  left: calc(50% - 175px);
  top: calc(10% + 30px);
  background-color: rgba(0,0,0,.5);
  height: 200px;
  width: 350px;
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
  left: calc(50% - 75px);
  top: calc(10% + 240px);
  width: 150px;
  display: inline-grid;
`;

const HajimeButton = styled.button`
  background-color: rgba(0,0,0,.5);
  border: none;
  color: #fff;
  font-family: monospace;
  font-size: 30px;
  margin-bottom: 10px;
  height: 50px;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #000;
    border: 3px dotted #000;
  }
`;

const YameButton = styled.button`
  background-color: rgba(0,0,0,.5);
  border: none;
  color: #fff;
  font-family: monospace;
  font-size: 30px;
  height: 50px;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #000;
    border: 3px dotted #000;
  }
`;

const ResetButton = styled.button`
  position: absolute;
  bottom: 7.5%;
  width: 100px;
  height: 50px;
  background-color: #fff;
  color: #3466ff;
  border: none;
  font-size: 20px;
  font-weight: bold;
  left: calc(50% - 50px);
  &:hover {
    color: #fe0000;
  }
`;

const KumiteApp = () => {

  const countdownRef = useRef(null);
  const [isHajime, setIsHajime] = useState(false);
  const [timerSelected, setTimerSelected] = useState(180);

  const handleHajime = () => {
    setIsHajime(true);
    countdownRef.current.start();
  };

  const handleYame = () => {
    countdownRef.current.pause();
  };

  return (
    <KumiteContainer>
      {/* <GkmaHeader /> */}
      <AkaContainer>
        <AkaScreen />
      </AkaContainer>
      <KumiteTimerOptionsContainer>
        <KumiteTimerOptions setTimerSelected={setTimerSelected} isHajime={isHajime} />
      </KumiteTimerOptionsContainer>
      <KumiteTimerContainer>
        <KumiteTimer countdownRef={countdownRef} timerSelected={timerSelected} />
      </KumiteTimerContainer>
      <AoContainer>
        <AoScreen />
      </AoContainer>
      <TimerControlButtons> 
        <HajimeButton onClick={() => handleHajime()}>Hajime</HajimeButton>
        <YameButton onClick={() => handleYame()}>Yame</YameButton>
      </TimerControlButtons>
      <ResetButton onClick={() => window.location.reload()}>Reset</ResetButton>
      <GkmaFooter/>
    </KumiteContainer>
  );
}

export default KumiteApp;