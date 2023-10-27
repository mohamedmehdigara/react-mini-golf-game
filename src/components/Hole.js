import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Physics from 'react-physics';

const StyledHole = styled.div`
  width: 50px;
  height: 50px;
  background-color: green;
`;

const Ball = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
`;

const Hole = ({ number, onHoleCompleted, physics }) => {
  const handleBallCollision = (physics, object) => {
    if (object.type === 'Hole') {
      // Handle the hole collision
    }
  };

  return (
    <StyledHole>
      <Physics onCollision={handleBallCollision}>
        <Ball />
      </Physics>
    </StyledHole>
  );
};

export default Hole;
