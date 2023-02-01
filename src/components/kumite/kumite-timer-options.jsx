import React from "react";
import styled from "styled-components";

const TimerButton = styled.button`
  background-color: rgba(0,0,0,.5);
  width: 50px;
  font-size: 14px;
  border: none;
  color: #fff;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #000;
    border: 1px dotted #000;
  }
`;

const KumiteTimerOptions = ({ setTimerSelected, isHajime }) => {

  const timerOptions = [60, 90, 120, 150, 180];

  return (
    timerOptions.map((timer) => <TimerButton onClick={() => setTimerSelected(timer)} disabled={isHajime} className={`${isHajime ? 'disabled': ''}`}>{timer}</TimerButton>)
  );
};

export default KumiteTimerOptions;
