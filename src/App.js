import React from 'react';
import { Physics } from 'react-physics';
import HoleContainer from './components/HoleContainer';

function App() {
  const physics = new Physics();

  return (
    <div>
      <HoleContainer physics={physics} />
    </div>
  );
}

export default App;
