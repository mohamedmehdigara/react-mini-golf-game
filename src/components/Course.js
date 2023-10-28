import React, { useState } from 'react';
import styled from 'styled-components';
import Hole from './Hole';

const StyledCourse = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;

const Course = ({ physics }) => {
  const [currentHole, setCurrentHole] = useState(1);
  const [courseCompleted, setCourseCompleted] = useState(false);

  const handleHoleCompleted = () => {
    if (currentHole === 18) {
      setCourseCompleted(true);
      return;
    }

    setCurrentHole(currentHole + 1);
  };

  const VictoryScreen = () => {
    return (
      <div>
        <h1>You win!</h1>
        <p>You completed the course in {currentHole} strokes.</p>
        <button onClick={() => setCurrentHole(1)}>Play again</button>
      </div>
    );
  };

  return (
    <StyledCourse>
      <Hole
        physics={physics}
        number={currentHole}
        onHoleCompleted={handleHoleCompleted}
      />
      {courseCompleted && <VictoryScreen />}
    </StyledCourse>
  );
};



export default Course;
