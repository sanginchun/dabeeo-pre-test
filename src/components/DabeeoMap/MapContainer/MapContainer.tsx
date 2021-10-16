import React from 'react';
import MAP_IMAGE from '../../../assets/map.png';

function MapContainer(): JSX.Element {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'max-content',
      }}
    >
      <img src={MAP_IMAGE} />
    </div>
  );
}

export default MapContainer;
