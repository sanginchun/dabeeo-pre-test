import React from 'react';
import DabeeoMap from './components/DabeeoMap/DabeeoMap';

const WIDTH = 1024;
const HEIGHT = 768;

function App(): JSX.Element {
  return <DabeeoMap width={WIDTH} height={HEIGHT} />;
}

export default App;
