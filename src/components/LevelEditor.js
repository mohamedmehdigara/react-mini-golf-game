import React, { useState } from 'react';
import styled from 'styled-components';
import Obstacle from './components/Obstacle';

const LevelEditorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function LevelEditor() {
  const [obstacles, setObstacles] = useState([]);

  const handleAddObstacle = (x, y) => {
    setObstacles([...obstacles, { x, y }]);
  };

  return (
    <LevelEditorWrapper>
      <div>
        {obstacles.map((obstacle, index) => (
          <ObstacleComponent key={index} x={obstacle.x} y={obstacle.y} />
        ))}
      </div>
      <button onClick={() => handleAddObstacle(100, 100)}>Add Obstacle</button>
    </LevelEditorWrapper>
  );
}

export default LevelEditor;
