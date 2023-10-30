import React, { useState, useEffect } from 'react';
import { PhysicsEngine } from './components/Physics';
import styled from 'styled-components';
import Multiplayer from './components/Multiplayer';

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
    // Create a new physics engine instance.
    const newPhysics = new PhysicsEngine();

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
