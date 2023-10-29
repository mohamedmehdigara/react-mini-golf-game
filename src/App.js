// App.js

import React, { memo } from 'react';
import HoleContainer from './components/HoleContainer';

// Memoize the HoleContainer component to prevent it from re-rendering unnecessarily.
// This will improve the performance of your application.
const MemoizedHoleContainer = memo(HoleContainer);

function App() {
  return (
    <div>
      <h1>Mini Golf</h1>
      <MemoizedHoleContainer />
    </div>
  );
}

export default App;
