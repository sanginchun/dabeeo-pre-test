import { SyntheticEvent, useState } from 'react';
import { Pos } from '../types';
import { calcCenter } from '../utils/positions';

export function useMap(viewWidth: number, viewHeight: number) {
  const [position, setPosition] = useState<Pos>([0, 0]);
  const [mapWidth, setMapWidth] = useState<number>(0);
  const [mapHeight, setMapHeight] = useState<number>(0);

  const handleMapImageLoad = (e: SyntheticEvent<HTMLImageElement>): void => {
    const { width, height } = e.currentTarget;

    setMapWidth(width);
    setMapHeight(height);
    setPosition(calcCenter(viewWidth, viewHeight, width, height));
  };

  return { position, setPosition, handleMapImageLoad, mapWidth, mapHeight };
}
