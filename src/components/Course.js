// Course.js

import React, { useState } from 'react';
// Imported the Hole component.
import Hole from './Hole';
// Imported the styled-components library for styling the course.
import styled from 'styled-components';

// Improved the style of the course to make it more visually appealing and to match the style of the rest of the game.
const StyledCourse = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00FF00;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Course = () => {
  // Added a state variable to track the current hole.
  const [currentHole, setCurrentHole] = useState(1);

  // Improved the name of the callback function to be more descriptive.
  const handleHoleCompletion = () => {
    // Check if the player has completed the course.
    if (currentHole === 18) {
      // The player has completed the course!
      // TODO: Show a victory screen or something
      return;
    }

    // Update the currentHole state variable.
    setCurrentHole(currentHole + 1);
  };

  // Improved the rendering of the Hole component to pass the current hole number and the handleHoleCompletion callback function as props.
  // Also added a key prop to the Hole component to improve performance.
  return (
    <StyledCourse>
      <Hole
        key={currentHole}
        number={currentHole}
        onHoleCompleted={handleHoleCompletion}
      />
    </StyledCourse>
  );
};

export default Course;
