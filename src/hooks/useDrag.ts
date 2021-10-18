import { useState, Dispatch, SetStateAction, MouseEvent } from 'react';
import { Pos } from '../types';
import { calcPosition } from '../utils/positions';

export function useDrag(
  viewWidth: number,
  viewHeight: number,
  mapWidth: number,
  mapHeight: number,
  setPosition: Dispatch<SetStateAction<Pos>>
) {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.button === 0) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.button === 0 && isDragging) {
      setIsDragging(false);
    }
  };

  const handleDrag = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();

    if (!isDragging) return;

    setPosition((prevPos) =>
      calcPosition(viewWidth, viewHeight, mapWidth, mapHeight, [
        prevPos[0] + e.movementX,
        prevPos[1] + e.movementY,
      ])
    );
  };

  return { isDragging, handleMouseDown, handleMouseUp, handleDrag };
}
