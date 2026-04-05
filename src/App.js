import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { create } from 'zustand';

// --- STYLES ---
const GameWrapper = styled.div`
  width: 100vw; height: 100vh;
  background: #122611;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  color: white; overflow: hidden;
`;

const Course = styled.div`
  position: relative;
  width: 900px; height: 550px;
  background: #388e3c;
  background-image: radial-gradient(#43a047 20%, transparent 20%);
  background-size: 40px 40px;
  border: 15px solid #1b361a;
  border-radius: 30px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.6);
  cursor: crosshair;
`;

const Ball = styled.div.attrs(props => ({
  style: { left: `${props.x}px`, top: `${props.y}px` },
}))`
  position: absolute; width: 14px; height: 14px;
  background: radial-gradient(circle at 30% 30%, #fff, #bbb);
  border-radius: 50%; transform: translate(-50%, -50%);
  z-index: 100; box-shadow: 2px 4px 6px rgba(0,0,0,0.3);
`;

const Putter = styled.div.attrs(props => ({
  style: {
    left: `${props.x}px`, top: `${props.y}px`,
    transform: `translate(-50%, 0) rotate(${props.angle}deg) translateY(${props.pullback}px)`,
    opacity: props.visible ? 1 : 0
  },
}))`
  position: absolute; width: 4px; height: 60px;
  background: linear-gradient(#999, #444); 
  transform-origin: top center; z-index: 90;
  pointer-events: none;
  &::after { 
    content: ''; position: absolute; bottom: 0; left: -10px;
    width: 24px; height: 8px; background: #222; border-radius: 2px;
  }
`;

const Hole = styled.div`
  position: absolute; left: 800px; top: 275px;
  width: 32px; height: 32px; background: #000;
  border-radius: 50%; transform: translate(-50%, -50%);
  box-shadow: inset 0 8px 15px rgba(0,0,0,1);
  &::before {
    content: 'FLAG'; position: absolute; top: -40px; left: 50%;
    transform: translateX(-50%); font-size: 10px; color: red; font-weight: bold;
  }
`;

const Hazard = styled.div`
  position: absolute; background: ${props => props.color};
  left: ${props => props.x}px; top: ${props => props.y}px;
  width: ${props => props.w}px; height: ${props => props.h}px;
  border-radius: ${props => props.radius || '0'};
  opacity: 0.7; z-index: 5;
`;

const UI = styled.div`
  margin-bottom: 20px; text-align: center;
  h2 { margin: 0; font-size: 2rem; color: #81c784; }
  span { font-weight: bold; color: #fff; font-size: 1.2rem; }
`;

// --- STATE ---
const useStore = create((set) => ({
  pos: { x: 100, y: 275 },
  vel: { x: 0, y: 0 },
  strokes: 0,
  isMoving: false,
  update: (state) => set(state),
  reset: () => set({ pos: { x: 100, y: 275 }, vel: { x: 0, y: 0 }, isMoving: false }),
}));

export default function App() {
  const { pos, vel, strokes, isMoving, update, reset } = useStore();
  const [drag, setDrag] = useState(null);
  const requestRef = useRef();

  const HOLE_X = 800;
  const HOLE_Y = 275;

  const physicsLoop = useCallback(() => {
    if (isMoving) {
      let friction = 0.985;
      let nx = pos.x + vel.x;
      let ny = pos.y + vel.y;
      let nvx = vel.x;
      let nvy = vel.y;

      // 1. Terrain Physics
      if (nx > 350 && nx < 550 && ny > 100 && ny < 450) friction = 0.93; // Sand
      nvx *= friction; 
      nvy *= friction;

      // 2. Wall Bounces
      if (nx < 22 || nx > 878) { nvx *= -0.6; nx = nx < 22 ? 22 : 878; }
      if (ny < 22 || ny > 528) { nvy *= -0.6; ny = ny < 22 ? 22 : 528; }

      // 3. THE HOLE LOGIC (Fixed)
      const dist = Math.sqrt((nx - HOLE_X)**2 + (ny - HOLE_Y)**2);
      
      // If ball is over the hole
      if (dist < 20) {
        // Suction force toward center
        nvx += (HOLE_X - nx) * 0.15;
        nvy += (HOLE_Y - ny) * 0.15;
        
        // Check for "Capture"
        const speed = Math.sqrt(nvx * nvx + nvy * nvy);
        if (dist < 10 && speed < 8) {
           alert(`In the hole! Score: ${strokes}`);
           update({ strokes: 0 });
           reset();
           return;
        }
      }

      // 4. Stopping logic
      if (Math.abs(nvx) < 0.1 && Math.abs(nvy) < 0.1) {
        update({ isMoving: false, vel: { x: 0, y: 0 } });
      } else {
        update({ pos: { x: nx, y: ny }, vel: { x: nvx, y: nvy } });
      }
    }
    requestRef.current = requestAnimationFrame(physicsLoop);
  }, [isMoving, pos, vel, strokes, update, reset]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(physicsLoop);
    return () => cancelAnimationFrame(requestRef.current);
  }, [physicsLoop]);

  const handleMouse = (type, e) => {
    if (isMoving) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (type === 'down') setDrag({ sx: x, sy: y, cx: x, cy: y });
    else if (type === 'move' && drag) setDrag({ ...drag, cx: x, cy: y });
    else if (type === 'up' && drag) {
      const dx = drag.sx - drag.cx;
      const dy = drag.sy - drag.cy;
      const power = Math.min(Math.sqrt(dx*dx + dy*dy), 150) * 0.2;
      const angle = Math.atan2(dy, dx);
      update({ 
        vel: { x: Math.cos(angle) * power, y: Math.sin(angle) * power }, 
        isMoving: true, 
        strokes: strokes + 1 
      });
      setDrag(null);
    }
  };

  const getPutterData = () => {
    if (!drag) return { visible: false };
    const dx = drag.cx - drag.sx;
    const dy = drag.cy - drag.sy;
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    const dist = Math.min(Math.sqrt(dx*dx + dy*dy), 150);
    return { visible: true, angle: angle - 90, pullback: dist / 1.5 };
  };

  const pData = getPutterData();

  return (
    <GameWrapper>
      <UI>
        <h2>MINI GOLF PRO</h2>
        <span>Strokes: {strokes}</span>
      </UI>
      
      <Course 
        onMouseDown={(e) => handleMouse('down', e)}
        onMouseMove={(e) => handleMouse('move', e)}
        onMouseUp={(e) => handleMouse('up', e)}
      >
        <Hazard color="#f0e68c" x={350} y={100} w={200} h={350} radius="50%" />
        <Hole />
        <Ball x={pos.x} y={pos.y} />
        <Putter 
          visible={pData.visible} 
          x={pos.x} y={pos.y} 
          angle={pData.angle} 
          pullback={pData.pullback} 
        />
      </Course>
    </GameWrapper>
  );
}