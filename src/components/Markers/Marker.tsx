import React from 'react';
import MARKER_IMAGE from '../../assets/marker.png';
import { Pos } from '../../types';

type MarkerProps = {
  position: Pos;
};

function Marker(props: MarkerProps) {
  const { position } = props;

  return (
    <div
      style={{
        position: 'absolute',
        top: `${position[1]}px`,
        left: `${position[0]}px`,
        transform: 'translate(-40%, -88%)',
      }}
    >
      <img src={MARKER_IMAGE} alt="marker" />
    </div>
  );
}

export default Marker;
