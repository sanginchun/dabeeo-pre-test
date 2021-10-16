import React, { useState, SyntheticEvent } from 'react';
import MapView from './components/MapView';
import MapImageContainer from './components/MapImgContainer';
import MAP_IMAGE from './assets/map.png';
import { Pos } from './types';
import { calcCenter } from './utils/positions';

const VIEW_WIDTH = 1024;
const VIEW_HEIGHT = 768;

function App(): JSX.Element {
  const [mapPos, setMapPos] = useState<Pos>([0, 0]);

  const setMapToCenter = (e: SyntheticEvent<HTMLImageElement>): void => {
    const { width, height } = e.currentTarget;

    setMapPos(calcCenter(VIEW_WIDTH, VIEW_HEIGHT, width, height));
  };

  return (
    <MapView width={VIEW_WIDTH} height={VIEW_HEIGHT}>
      <MapImageContainer
        imageSrc={MAP_IMAGE}
        onImageLoad={setMapToCenter}
        position={mapPos}
      />
    </MapView>
  );
}

export default App;
