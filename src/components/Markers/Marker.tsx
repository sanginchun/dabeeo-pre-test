import React from 'react';
import MARKER_IMAGE from '../../assets/marker.png';
import { Pos } from '../../types';

type MarkerProps = {
  pos: Pos;
};

function Marker(props: MarkerProps) {
  const { pos } = props;

  return (
    <div
      style={{ position: 'absolute', top: `${pos[1]}px`, left: `${pos[0]}px` }}
    >
      <img src={MARKER_IMAGE} alt="marker" />
    </div>
  );
}

export default Marker;
