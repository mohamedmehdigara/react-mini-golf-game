// App.js

import React from 'react';
import HoleContainer from './components/HoleContainer';

function App() {
  // Memoize the HoleContainer component to prevent it from re-rendering unnecessarily.
  const HoleContainerMemoized = React.memo(HoleContainer);

  return (
    <div>
      <HoleContainerMemoized />
    </div>
  );
}

export default App;
