import React, { useState, SyntheticEvent } from 'react';
import MapView from './components/MapView';
import MapContainer from './components/MapContainer';
import MAP_IMAGE from './assets/map.png';
import MarkerLayer from './components/Markers/MarkerLayer';
import MarkerResetButton from './components/Markers/MarkerResetButton';
import { useMap } from './hooks/useMap';
import { useDrag } from './hooks/useDrag';
import { Pos } from './types';

const VIEW_WIDTH = 1024;
const VIEW_HEIGHT = 768;

function App(): JSX.Element {
  const { position, setPosition, handleMapImageLoad, mapWidth, mapHeight } =
    useMap(VIEW_WIDTH, VIEW_HEIGHT);
  const { isDragging, handleMouseDown, handleMouseUp, handleDrag } = useDrag(
    VIEW_WIDTH,
    VIEW_HEIGHT,
    mapWidth,
    mapHeight,
    setPosition
  );
  const [markersPos, setMarkersPos] = useState<Pos[]>([]);

  const handleRightClick = (e: SyntheticEvent<HTMLDivElement>): void => {
    e.preventDefault();

    const { offsetX, offsetY } = e.nativeEvent as PointerEvent;

    setMarkersPos((prev) => [...prev, [offsetX, offsetY]]);
  };

  const handleResetButtonClick = (
    e: SyntheticEvent<HTMLButtonElement>
  ): void => {
    setMarkersPos([]);
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
        <MarkerResetButton onClick={handleResetButtonClick} />
        <MapContainer
          imageSrc={MAP_IMAGE}
          onImageLoad={handleMapImageLoad}
          position={position}
          onRightClick={handleRightClick}
        >
          <MarkerLayer markersPos={markersPos} />
        </MapContainer>
      </MapView>
    </div>
  );
}

export default App;
