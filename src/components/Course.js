import React, {useState} from 'react';
import styled from 'styled-components';
import HoleContainer from './HoleContainer';

const CourseWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Course() {
  const [currentHole, setCurrentHole] = useState(1);

  const handleHoleCompleted = () => {
    setCurrentHole(currentHole + 1);
  };

  return (
    <CourseWrapper>
      <HoleContainer holeNumber={currentHole} onHoleCompleted={handleHoleCompleted} />
    </CourseWrapper>
  );
}

export default Course;
