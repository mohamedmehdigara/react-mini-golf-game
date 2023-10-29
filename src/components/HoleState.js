// HoleState.js

import React, { useState, useEffect, useRef } from 'react';
import { handleBallCollision, Ball } from './Ball';
import Hole from './Hole';
import {physics} from "react-physics";

const HoleState = ({ physics, number, onHoleCompleted }) =>  {
  const holeRef = useRef(null);
  const [isBallInHole, setIsBallInHole] = useState(false);

  useEffect(() => {
    // Get the DOM element that the Hole component is rendered to
    const holeElement = holeRef.current;

    // Check if the target element is a DOM element
    if (holeElement != null && holeElement instanceof HTMLElement) {
      // The target element is a DOM element
      // Add the Hole component to the physics world
      physics.addBody(holeElement);
    } else {
      // The target element is not a DOM element
      // Throw an error
      throw new Error('Target container is not a DOM element');
    }
  }, [physics]);

  const handleBallCollision = (physics, object) => {
    // ...
  };

  return (
    <Hole
      number={number}
      onHoleCompleted={onHoleCompleted}
      physics={physics}
      isBallInHole={isBallInHole}
      ref={holeRef}
    />
  );
};

export default HoleState;
