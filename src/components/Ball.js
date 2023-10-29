import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BallWrapper = styled.div`
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
  position: absolute;
`;

function Ball({ x, y, physics }) {
  const [ballPosition, setBallPosition] = useState({ x, y });

  useEffect(() => {
    const updateBallPosition = () => {
      // Use the physics engine to update the ball's position.
      const newBallPosition = physics.update(ballPosition);

      // Set the new ball position.
      setBallPosition(newBallPosition);
    };

    // Update the ball's position every frame.
    const intervalId = setInterval(updateBallPosition, 16);

    return () => {
      clearInterval(intervalId);
    };
  }, [physics]);

  return (
    <BallWrapper style={ballPosition} />
  );
}

export default Ball;
