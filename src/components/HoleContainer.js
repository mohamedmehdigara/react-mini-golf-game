import React, { useState } from 'react';
import styled from 'styled-components';

const HoleContainerWrapper = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
`;

const Hole = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 225px;
  left: 225px;
`;

const Ball = styled.div`
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
  position: absolute;
  top: 250px;
  left: 250px;
`;

function HoleContainer() {
  const [ballPosition, setBallPosition] = useState({ x: 250, y: 250 });

  return (
    <HoleContainerWrapper>
      <Hole />
      <Ball style={{ top: ballPosition.y, left: ballPosition.x }} />
    </HoleContainerWrapper>
  );
}

export default HoleContainer;
