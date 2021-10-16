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

export function calcPosition(
  viewWidth: number,
  viewHeight: number,
  mapWidth: number,
  mapHeight: number,
  pos: Pos
): Pos {
  const minX = -(mapWidth - viewWidth);
  const maxX = 0;

  const minY = -(mapHeight - viewHeight);
  const maxY = 0;

  let x = pos[0];
  let y = pos[1];

  if (x < minX) x = minX;
  if (y < minY) y = minY;

  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;

  return [x, y];
}
