import React from 'react';
import {
  Link
} from 'react-router-dom';

const ScreenLayouts = () => {
  return (
    <>
      <button><Link to="/kata">Kata</Link></button>
      <button><Link to="/kumite">Kumite</Link></button>
    </>
  )
}

export default ScreenLayouts;