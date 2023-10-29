import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Multiplayer from './components/Multiplayer';
import Physics from './components/Physics';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [physics, setPhysics] = useState(null);

  useEffect(() => {
    // Initialize the physics engine.
    const newPhysics = new Physics();

    // Set the physics state.
    setPhysics(newPhysics);
  }, []);

  if (!physics) {
    return null;
  }

  return (
    <AppWrapper>
      <Multiplayer physics={physics} />
    </AppWrapper>
  );
}

export default App;
