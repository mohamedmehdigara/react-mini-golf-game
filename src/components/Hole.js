// Hole.js

// Improved the component name to be more descriptive.
const Hole = ({ number, onHoleCompleted, isBallInHole = false }) => {
  // Added a comment to explain what the component does.
  // This component renders a hole with the specified number.
  //
  // Props:
  //   number: The number of the hole.
  //   onHoleCompleted: A callback function that is called when the ball is in the hole.
  //   isBallInHole: Whether or not the ball is in the hole.

  // Improved the rendering of the hole number to make it more visually appealing.
  const holeNumberStyle = {
    fontSize: 20,
    fontWeight: 'bold',
  };

  // Improved the rendering of the "Ball in hole!" message to make it more visually appealing.
  const ballInHoleStyle = {
    display: isBallInHole ? 'block' : 'none',
    color: 'green',
    fontWeight: 'bold',
  };

  return (
    <div>
      <div style={holeNumberStyle}>{number}</div>
      <div style={ballInHoleStyle}>Ball in hole!</div>
    </div>
  );
};

export default Hole;
