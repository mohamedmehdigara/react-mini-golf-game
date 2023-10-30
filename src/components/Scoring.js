import React, { useState, useEffect } from 'react';

const Physics = ({ physicsEngine }) => {
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update the ball's position every frame.
    const intervalId = setInterval(() => {
      const newBallPosition = physicsEngine.update(ballPosition);
      setBallPosition(newBallPosition);
    }, 16);

    return () => {
      clearInterval(intervalId);
    };
  }, [physicsEngine]);

  // Render the ball at the current position.
  return (
    <div style={{ position: 'absolute', left: ballPosition.x, top: ballPosition.y }}>
      <img src="/ball.png" alt="Ball" />
    </div>
  );
};

export default Physics;
