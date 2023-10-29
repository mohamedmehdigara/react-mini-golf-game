// Hole.js

import React, { useRef } from 'react';
import { handleBallCollision, Ball } from './Ball';
import physics from "react-physics";


const Hole = ({ number, onHoleCompleted, physics, ref }) =>  {
  const holeRef = useRef(null);

  // Render the Hole component
  return (
    <React.Fragment>
      <div ref={holeRef}>
        <Physics onCollision={handleBallCollision}>
          <Ball />
        </Physics>
      </div>
    </React.Fragment>
  );
};

export default Hole;
