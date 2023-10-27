import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Physics from 'react-physics';

const StyledHole = styled.div`
  width: 50px;
  height: 50px;
  background-color: green;
  border-radius: 50%;
`;

const Ball = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
`;

const Hole = ({ number, onHoleCompleted, physics }) => {
  const [isBallInHole, setIsBallInHole] = useState(false);

  const handleBallCollision = (physics, object) => {
    if (object.type === 'Hole') {
      setIsBallInHole(true);

      // Destroy the golf ball
      physics.destroy(object);

      // Update the scorecard
      physics.getScorecard().incrementScore();

      // Call the onHoleCompleted callback prop
      onHoleCompleted();
    }
  };

  useEffect(() => {
    if (isBallInHole) {
      // Reset the hole
      setIsBallInHole(false);

      // Create a new golf ball
      const ball = physics.createSphere({
        mass: 1,
        radius: 5,
        position: [0, 0],
      });

      // Add the golf ball to the physics world
      physics.addBody(ball);
    }
  }, [isBallInHole, physics]);

  return (
    <StyledHole>
      <Physics onCollision={handleBallCollision}>
        {isBallInHole ? null : <Ball />}
      </Physics>
    </StyledHole>
  );
};

export default Hole;
