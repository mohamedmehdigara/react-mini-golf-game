import React from 'react';
import styled from 'styled-components';

const ScoringWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  position: absolute;
  top: 10px;
  left: 10px;
`;

function Scoring({ score }) {
  return (
    <ScoringWrapper>
      <h2>Score: {score}</h2>
    </ScoringWrapper>
  );
}

export default Scoring;
