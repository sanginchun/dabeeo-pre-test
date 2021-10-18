import React, { SyntheticEvent, EventHandler, PropsWithChildren } from 'react';
import { Pos } from '../types';

type MapContainerProps = {
  imageSrc: string;
  position: Pos;
  onImageLoad: EventHandler<SyntheticEvent>;
};

function MapContainer(
  props: PropsWithChildren<MapContainerProps>
): JSX.Element {
  const { imageSrc, position, onImageLoad, children } = props;

  return (
    <div
      style={{
        position: 'absolute',
        top: `${position[1]}px`,
        left: `${position[0]}px`,
      }}
    >
      <img
        src={imageSrc}
        alt="map"
        style={{ display: 'block' }}
        onLoad={onImageLoad}
      />
      {children}
    </div>
  );
}

export default MapContainer;
