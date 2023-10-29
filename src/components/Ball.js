// Ball.js

import React from 'react';

// Improved function name to indicate that it handles collisions with any object, not just balls.
export function handleObjectCollision(object) {
  // ...
}

// Improved the component name to be more descriptive.
export const Ball = () => {
  // Improved the style to make the ball more visible and to match the style of the rest of the game.
  return <div style={{ width: 30, height: 30, backgroundColor: '#FF0000', borderRadius: '50%' }} />;
};

// Exported the component under its new name.
export default Ball;
