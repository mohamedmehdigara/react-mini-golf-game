// HoleState.js

import React, { useState, useEffect, holeElement } from 'react';
import Hole from './Hole';

// Improved the component name to be more descriptive.
const HoleState = ({ number, onHoleCompleted }) => {
  // Added a state variable to track whether or not the ball is in the hole.
  const [isBallInHole, setIsBallInHole] = useState(false);

  // Improved the useEffect hook to use the holeElement ref to check if the ball is in the hole.
  useEffect(() => {
    const holeElement = holeElement.current;

    // Check if the ball is in the hole.
    if (holeElement != null && holeElement instanceof HTMLElement && holeElement.contains(holeElement.current)) {
      setIsBallInHole(true);
    } else {
      setIsBallInHole(false);
    }
  }, [holeElement]);

  // Improved the return statement to pass the isBallInHole state variable to the Hole component.
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
