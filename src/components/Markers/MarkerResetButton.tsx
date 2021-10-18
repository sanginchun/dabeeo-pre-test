import React from 'react';
import BUTTON_IMAGE from '../../assets/reset.png';

function MarkerResetButton() {
  return (
    <button
      style={{
        position: 'absolute',
        top: '2rem',
        right: '1.5rem',
        border: 'none',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <img src={BUTTON_IMAGE} alt="reset" />
    </button>
  );
}

export default MarkerResetButton;
