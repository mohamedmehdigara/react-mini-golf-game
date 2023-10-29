// Hole.js

import React from 'react';

const Hole = ({ number, onHoleCompleted, isBallInHole }) => {
  // Removed code related to react-physics

  return (
    <div>
      <div>{number}</div>
      <div>{isBallInHole ? 'Ball in hole!' : ''}</div>
    </div>
  );
};

export default Hole;
