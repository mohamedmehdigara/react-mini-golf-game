
// App.js

import React from 'react';
import { Physics } from 'react-physics';
import HoleState from './components/HoleState';

function App() {
  const physics = Physics();

  return (
    <div>
      <HoleState physics={physics} />
    </div>
  );
}

export default App;
