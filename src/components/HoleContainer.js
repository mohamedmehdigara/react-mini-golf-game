import React, { useState, useEffect, useRef } from 'react';
import Physics from 'react-physics';

const HoleState = ({ number, onHoleCompleted }) => {
  // ...
};

const HoleContainer = ({ physics }) => {
  const holeRef = useRef(null);

  useEffect(() => {
    const holeElement = holeRef.current;

    physics.addBody(holeElement);
  }, [physics]);

  return (
    <HoleState ref={holeRef} />
  );
};

export default HoleContainer;
