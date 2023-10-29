// HoleContainer.js

// HoleContainer.js

import React, { useState, useEffect, holeRef, useRef } from 'react';
import Hole from './Hole';

// Improved the component name to be more descriptive.
const HoleContainer = ({ style }) => {
  const holeRef = useRef(null);

  useEffect(() => {
    const holeElement = holeRef.current;

    // Check if the DOM element exists
    if (holeElement != null && holeElement instanceof HTMLElement) {
      // The DOM element exists
    } else {
      // The DOM element does not exist
    }
  }, [holeRef]);

  return (
    <div ref={holeRef} style={style}>
      <Hole />
    </div>
  );
};

export default HoleContainer;
