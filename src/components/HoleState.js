// HoleState.js

// Improved the component name to be more descriptive.
const HoleState = ({ number, onHoleCompleted }) => {
  // Added a comment to explain what the component does.
  // This component renders a hole with the specified number and tracks whether or not the ball is in the hole.
  //
  // Props:
  //   number: The number of the hole.
  //   onHoleCompleted: A callback function that is called when the ball is in the hole.

  // Added a state variable to track whether or not the ball is in the hole.
  const [isBallInHole, setIsBallInHole] = useState(false);

  // Improved the useEffect hook to use the holeElement ref to check if the ball is in the hole.
  // Also added a dependency on the isBallInHole state variable to ensure that the effect is only re-run when the state changes.
  useEffect(() => {
    const holeElement = holeElement.current;

    // Check if the ball is in the hole.
    if (holeElement != null && holeElement instanceof HTMLElement && holeElement.contains(holeElement.current) && !isBallInHole) {
      setIsBallInHole(true);
      onHoleCompleted();
    } else if (isBallInHole) {
      setIsBallInHole(false);
    }
  }, [holeElement, isBallInHole]);

  // Improved the return statement to pass the isBallInHole state variable to the Hole component.
  return (
    <div>
      <Hole
        number={number}
        onHoleCompleted={onHoleCompleted}
        isBallInHole={isBallInHole}
      />
    </div>
  );
};

export default HoleState;
