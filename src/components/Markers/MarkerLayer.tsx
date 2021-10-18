import React from 'react';
import { Pos } from '../../types';
import Marker from './Marker';

type MarkerLayerProps = {
  markersPos: Pos[];
};

function MarkerLayer(props: MarkerLayerProps): JSX.Element {
  const { markersPos } = props;

  const Markers = markersPos.map((pos: Pos) => (
    <Marker key={`${pos[0]},${pos[1]}`} pos={pos} />
  ));

  return <>{Markers}</>;
}

export default MarkerLayer;
