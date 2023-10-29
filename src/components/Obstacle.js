import React from 'react';
import styled from 'styled-components';

const ObstacleWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: green;
  border: 1px solid black;
  position: absolute;
`;

function Obstacle({ x, y }) {
  return (
    <ObstacleWrapper style={{ top: y, left: x }} />
  );
}

export default Obstacle;
