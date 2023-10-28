import React, { useState, useEffect, useRef } from 'react';
import Physics from 'react-physics';

const HoleState = ({ number, onHoleCompleted, physics }) =>  {
  const [isBallInHole, setIsBallInHole] = useState(false);

  const handleBallCollision = (physics, object) => {
    if (object.type === 'Hole') {
      setIsBallInHole(true);

      // Destroy the golf ball
      physics.destroy(object);

      // Update the scorecard
      physics.getScorecard().incrementScore();

      // Call the onHoleCompleted callback prop
      if (onHoleCompleted) {
        onHoleCompleted();
      }
    }
  };

  return (
    <Hole
      number={number}
      onHoleCompleted={onHoleCompleted}
      physics={physics}
      isBallInHole={isBallInHole}
    />
  );
};

const Hole = ({ number, onHoleCompleted, physics, isBallInHole }) => {
  const holeRef = useRef(null);

  useEffect(() => {
    // Get the DOM element that the Hole component is rendered to
    const holeElement = holeRef.current;

    // Check if the target element is a DOM element
    if (holeElement !== null && holeElement instanceof HTMLElement) {
      // The target element is a DOM element
      // Add the Hole component to the physics world
      physics.addBody(holeElement);
    } else {
      // The target element is not a DOM element
      // Throw an error
      throw new Error('Target container is not a DOM element');
    }
  }, [physics]);

  // Render the Hole component
  return (
    <React.Fragment>
      <div ref={holeRef}>
        <Physics onCollision={handleBallCollision}>
          {isBallInHole ? null : <Ball />}
        </Physics>
      </div>
    </React.Fragment>
  );
};

export default HoleState;
