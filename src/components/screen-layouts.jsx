import React from 'react';
import {
  Link
} from 'react-router-dom';

const ScreenLayouts = () => {
  return (
    <>
      <button><Link to="/gkma-karate-app/kata">Kata</Link></button>
      <button><Link to="/gkma-karate-app/kumite">Kumite</Link></button>
    </>
  )
}

export default ScreenLayouts;