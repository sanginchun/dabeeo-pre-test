import React, { useState, SyntheticEvent, MouseEvent } from 'react';
import MapView from './components/MapView';
import MapImageContainer from './components/MapImgContainer';
import MAP_IMAGE from './assets/map.png';
import { Pos } from './types';
import { calcCenter } from './utils/positions';

const VIEW_WIDTH = 1024;
const VIEW_HEIGHT = 768;

function App(): JSX.Element {
  const [mapPos, setMapPos] = useState<Pos>([0, 0]);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const setMapToCenter = (e: SyntheticEvent<HTMLImageElement>): void => {
    const { width, height } = e.currentTarget;

    setMapPos(calcCenter(VIEW_WIDTH, VIEW_HEIGHT, width, height));
  };

  const handleDrag = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();

    if (!isDragging) return;

    setMapPos((prevPos) => [
      prevPos[0] + e.movementX,
      prevPos[1] + e.movementY,
    ]);
  };

  return (
    <div
      style={{ cursor: isDragging ? 'move' : 'default' }}
      onMouseMove={handleDrag}
      onMouseUp={() => setIsDragging(false)}
    >
      <MapView
        width={VIEW_WIDTH}
        height={VIEW_HEIGHT}
        onMouseDown={() => setIsDragging(true)}
      >
        <MapImageContainer
          imageSrc={MAP_IMAGE}
          onImageLoad={setMapToCenter}
          position={mapPos}
        />
      </MapView>
    </div>
  );
}

export default App;
