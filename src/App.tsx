import React, { useState, SyntheticEvent, MouseEvent } from 'react';
import MapView from './components/MapView';
import MapContainer from './components/MapContainer';
import MAP_IMAGE from './assets/map.png';
import MarkerLayer from './components/Markers/MarkerLayer';
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
        <MapContainer
          imageSrc={MAP_IMAGE}
          onImageLoad={handleMapImageLoad}
          position={mapPos}
        >
          <MarkerLayer markersPos={markersPos} />
        </MapContainer>
      </MapView>
    </div>
  );
}

export default App;
