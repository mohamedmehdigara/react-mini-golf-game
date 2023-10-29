// Hole.js

const Hole = ({ number, onHoleCompleted, isBallInHole = false }) => {
    // Removed code related to react-physics
  
    // Improved the rendering of the hole number to make it more visually appealing.
    const holeNumberStyle = {
      fontSize: 20,
      fontWeight: 'bold',
    };
  
    const ballInHoleStyle = {
      display: isBallInHole ? 'block' : 'none',
    };
  
    return (
      <div>
        <div style={holeNumberStyle}>{number}</div>
        <div style={ballInHoleStyle}>Ball in hole!</div>
      </div>
    );
  };
export default Hole;
