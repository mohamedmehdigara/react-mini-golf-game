import React, { useState } from 'react';
import Hole from './Hole';
import styled from 'styled-components';

const StyledCourse = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;

const Course = () => {
  const [currentHole, setCurrentHole] = useState(1);

  const handleHoleCompleted = () => {
    // Check if the player has completed the course
    if (currentHole === 18) {
      // The player has completed the course!
      // TODO: Show a victory screen or something
      return;
    }

    // Update the currentHole state variable
    setCurrentHole(currentHole + 1);
  };

  return (
    <StyledCourse>
      <Hole
        number={currentHole}
        onHoleCompleted={handleHoleCompleted}
      />
    </StyledCourse>
  );
};

export default Course;
