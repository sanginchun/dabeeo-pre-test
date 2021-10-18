import React from 'react';
import MapView from './components/MapView';
import MapContainer from './components/MapContainer';
import MAP_IMAGE from './assets/map.png';
import MarkerLayer from './components/Markers/MarkerLayer';
import MarkerResetButton from './components/Markers/MarkerResetButton';
import { useMap } from './hooks/useMap';
import { useDrag } from './hooks/useDrag';
import { useMarkers } from './hooks/useMarkers';

const VIEW_WIDTH = 1024;
const VIEW_HEIGHT = 768;

function App(): JSX.Element {
  const { position, setPosition, handleMapImageLoad, mapWidth, mapHeight } =
    useMap(VIEW_WIDTH, VIEW_HEIGHT);
  const { isDragging, dragStart, dragEnd, drag } = useDrag(
    VIEW_WIDTH,
    VIEW_HEIGHT,
    mapWidth,
    mapHeight,
    setPosition
  );
  const { markerPositions, addMarker, resetMarkers } = useMarkers([]);

  return (
    <div
      style={{ cursor: isDragging ? 'move' : 'default', height: '100vh' }}
      onMouseMove={drag}
      onMouseUp={dragEnd}
    >
      <MapView width={VIEW_WIDTH} height={VIEW_HEIGHT} onMouseDown={dragStart}>
        <MarkerResetButton onClick={resetMarkers} />
        <MapContainer
          imageSrc={MAP_IMAGE}
          position={position}
          onImageLoad={handleMapImageLoad}
          onRightClick={addMarker}
        >
          <MarkerLayer positions={markerPositions} />
        </MapContainer>
      </MapView>
    </div>
  );
}

export default App;
