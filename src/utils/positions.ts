import { Pos } from '../types';

export function calcCenter(
  viewWidth: number,
  viewHeight: number,
  mapWidth: number,
  mapHeight: number
): Pos {
  const x = -(mapWidth - viewWidth) / 2;
  const y = -(mapHeight - viewHeight) / 2;

  return [x, y];
}
