import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import Ball from './Ball';

const MultiplayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Multiplayer() {
  const [socket, setSocket] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Connect to the multiplayer server.
    const newSocket = io('ws://localhost:8080');

    // Set the socket state.
    setSocket(newSocket);

    // Listen for incoming messages.
    newSocket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);

      // Update the players state.
      setPlayers(data.players);
    });

    // Disconnect from the multiplayer server when the component unmounts.
    return () => {
      newSocket.close();
    };
  }, []);

  // Send the player's ball position to the multiplayer server.
  const sendBallPosition = (ballPosition) => {
    socket.emit('ballPosition', ballPosition);
  };

  return (
    <MultiplayerWrapper>
      {players.map((player, index) => (
        <Ball
          key={index}
          x={player.ballPosition.x}
          y={player.ballPosition.y}
        />
      ))}
    </MultiplayerWrapper>
  );
}

export default Multiplayer;
