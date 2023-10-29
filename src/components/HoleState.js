// HoleState.js

import React, { useState, useEffect, useRef } from 'react';
import Hole from './Hole';

const HoleState = ({ number, onHoleCompleted }) =>  {
  const holeRef = useRef(null);
  const [isBallInHole, setIsBallInHole] = useState(false);

  // Removed code related to react-physics

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
    <div>
      <Hole
        number={number}
        onHoleCompleted={onHoleCompleted}
        isBallInHole={isBallInHole}
      />
    </div>
  );
};

export default HoleState;