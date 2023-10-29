// HoleContainer.js

import React, { useState, useEffect, useRef } from 'react';
import Hole from './Hole';

// Moved the useRef hook call to the top of the component.

const HoleContainer = ({ style }) => {
  // ...
  const holeRef = useRef(null);

  return (
    <div ref={holeRef} style={style}>
      <Hole />
    </div>
  );
};

export default HoleContainer;
