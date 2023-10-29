// HoleContainer.js

import React, { useState, useEffect, useRef } from 'react';
import HoleState from "./HoleState";

const HoleContainer = ({  }) => {
  const holeRef = useRef(null);

  useEffect(() => {
    const holeElement = holeRef.current;

    // Check if the target element is a DOM element
    if (holeElement != null && holeElement instanceof HTMLElement) {
      // The target element is a DOM element
    } else {
      // The target element is not a DOM element
      // Throw an error
      throw new Error('Target container is not a DOM element');
    }
  }, []);

  return (
    <div ref={holeRef}>
      <HoleState />
    </div>
  );
};

export default HoleContainer;
