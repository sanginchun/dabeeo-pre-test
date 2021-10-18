import { SyntheticEvent, useState } from 'react';
import { Pos } from '../types';

export function useMarkers(initialPositions: Pos[]) {
  const [markerPositions, setPositions] = useState<Pos[]>(initialPositions);

  const addMarker = (e: SyntheticEvent<HTMLDivElement>): void => {
    e.preventDefault();

    const { offsetX, offsetY } = e.nativeEvent as PointerEvent;

    setPositions((prev) => [...prev, [offsetX, offsetY]]);
  };

  const resetMarkers = (e: SyntheticEvent<HTMLButtonElement>): void => {
    setPositions([]);
  };

  return { markerPositions, addMarker, resetMarkers };
}
