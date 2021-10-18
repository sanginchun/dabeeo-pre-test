import React from 'react';
import { Pos } from '../../types';
import Marker from './Marker';

type MarkerLayerProps = {
  positions: Pos[];
};

function MarkerLayer(props: MarkerLayerProps): JSX.Element {
  const { positions } = props;

  const Markers = positions.map((pos: Pos) => (
    <Marker key={`${pos[0]},${pos[1]}`} position={pos} />
  ));

  return <>{Markers}</>;
}

export default MarkerLayer;
