import React, { PropsWithChildren } from 'react';

type MapViewProps = {
  width: number;
  height: number;
};

function MapView(props: PropsWithChildren<MapViewProps>): JSX.Element {
  const { width, height, children } = props;

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}

export default MapView;
