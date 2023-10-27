import React, { useState } from 'react';
import styled from 'styled-components';
import Course from './components/Course';
import Scorecard from './components/Scorecard';
import { Physics } from 'react-physics';

const StyledApp = styled.div`
  display: flex;
  justify-content: space-between;
  /* Add your main game page styling here */
`;

const App = () => {
  const [physics, setPhysics] = useState(null);

  React.useEffect(() => {
    const physics = new Physics();
    setPhysics(physics);
  }, []);

  return (
    <StyledApp>
      <Physics ref={physics}>
        <Course physics={physics} />
      </Physics>
      <Scorecard physics={physics} />
    </StyledApp>
  );
};

export default App;

