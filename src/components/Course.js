import React, { useState } from 'react';
import styled from 'styled-components';
import Hole from './Hole';

const StyledCourse = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;

const Course = () => {
  const [currentHole, setCurrentHole] = useState(1);

  const handleHoleCompleted = () => {
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
