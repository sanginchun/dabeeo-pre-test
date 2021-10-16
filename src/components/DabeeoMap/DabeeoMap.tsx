import React from 'react';

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
        backgroundColor: 'red',
      }}
    ></div>
  );
}

export default DabeeoMap;
