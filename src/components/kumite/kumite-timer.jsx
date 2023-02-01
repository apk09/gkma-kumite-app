import React from 'react';
import Countdown from 'react-countdown';

const KumiteTimer = ({ countdownRef, timerSelected }) => {

  const renderer = (data) => <span>{data.formatted.minutes}:{data.formatted.seconds}</span>;

  return (
    <>
      <Countdown 
        ref={countdownRef}
        date={Date.now() + timerSelected*1000} 
        autoStart={false}
        renderer={renderer}
      />
    </>
  );
};

export default KumiteTimer;
