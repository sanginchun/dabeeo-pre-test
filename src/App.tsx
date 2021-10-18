import React, { useState, SyntheticEvent, MouseEvent } from 'react';
import MapView from './components/MapView';
import MapContainer from './components/MapContainer';
import MAP_IMAGE from './assets/map.png';
import MarkerLayer from './components/Markers/MarkerLayer';
import MarkerResetButton from './components/Markers/MarkerResetButton';
import { Pos } from './types';
import { calcCenter, calcPosition } from './utils/positions';

const VIEW_WIDTH = 1024;
const VIEW_HEIGHT = 768;

let MAP_WIDTH: number;
let MAP_HEIGHT: number;

function App(): JSX.Element {
  const [mapPos, setMapPos] = useState<Pos>([0, 0]);
  const [markersPos, setMarkersPos] = useState<Pos[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMapImageLoad = (e: SyntheticEvent<HTMLImageElement>): void => {
    MAP_WIDTH = e.currentTarget.width;
    MAP_HEIGHT = e.currentTarget.height;

    setMapPos(calcCenter(VIEW_WIDTH, VIEW_HEIGHT, MAP_WIDTH, MAP_HEIGHT));
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.button === 0) {
      // left click
      setIsDragging(true);
    }
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.button === 0) {
      // left click
      setIsDragging(false);
    }
  };

  const handleDrag = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();

    if (!isDragging) return;

    setMapPos((prevPos) =>
      calcPosition(VIEW_WIDTH, VIEW_HEIGHT, MAP_WIDTH, MAP_HEIGHT, [
        prevPos[0] + e.movementX,
        prevPos[1] + e.movementY,
      ])
    );
  };

  const handleRightClick = (e: SyntheticEvent<HTMLDivElement>): void => {
    e.preventDefault();

    const { offsetX, offsetY } = e.nativeEvent as PointerEvent;

    setMarkersPos((prev) => [...prev, [offsetX, offsetY]]);
  };

  return (
    <div
      style={{ cursor: isDragging ? 'move' : 'default' }}
      onMouseMove={handleDrag}
      onMouseUp={handleMouseUp}
    >
      <MapView
        width={VIEW_WIDTH}
        height={VIEW_HEIGHT}
        onMouseDown={handleMouseDown}
      >
        <MarkerResetButton />
        <MapContainer
          imageSrc={MAP_IMAGE}
          onImageLoad={handleMapImageLoad}
          position={mapPos}
          onRightClick={handleRightClick}
        >
          <MarkerLayer markersPos={markersPos} />
        </MapContainer>
      </MapView>
    </div>
  );
}

export default App;
