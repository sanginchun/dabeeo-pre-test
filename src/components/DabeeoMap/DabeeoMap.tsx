import React from 'react';
import MapContainer from './MapContainer/MapContainer';

type MapProps = {
  width: number;
  height: number;
};

function DabeeoMap(props: MapProps): JSX.Element {
  const { width, height } = props;

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <MapContainer />
    </div>
  );
}

export default DabeeoMap;
