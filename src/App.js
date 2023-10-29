import React from 'react';
import styled from 'styled-components';
import Course from './components/Course';
import Obstacle from './components/Obstacle';
import Scoring from './components/Scoring';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppWrapper>
      <Course />
      <Obstacle x={100} y={100} />
      <Obstacle x={200} y={200} />
      <Scoring score={0} />
    </AppWrapper>
  );
}

export default App;
