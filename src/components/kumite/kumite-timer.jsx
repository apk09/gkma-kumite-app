import React, { useRef } from 'react';
import Countdown from 'react-countdown';

const KumiteTimer = ({ countdownRef }) => {

  const renderer = (data) => <span>{data.formatted.minutes}:{data.formatted.seconds}</span>;

  return (
    <>
      <Countdown 
        ref={countdownRef}
        date={Date.now() + 180000} 
        autoStart={false}
        renderer={renderer}
      />
    </>
  );
};

export default KumiteTimer;
