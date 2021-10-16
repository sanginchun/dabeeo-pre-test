import React, { MouseEventHandler, PropsWithChildren } from 'react';

type MapViewProps = {
  width: number;
  height: number;
  onMouseDown: MouseEventHandler;
};

function MapView(props: PropsWithChildren<MapViewProps>): JSX.Element {
  const { width, height, onMouseDown, children } = props;

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  );
}

export default MapView;
