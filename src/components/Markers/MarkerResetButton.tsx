import React, { EventHandler, SyntheticEvent } from 'react';
import BUTTON_IMAGE from '../../assets/reset.png';

type MarkerResetButtonProps = {
  onClick: EventHandler<SyntheticEvent>;
};

function MarkerResetButton(props: MarkerResetButtonProps) {
  const { onClick } = props;

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
      onClick={onClick}
    >
      <img src={BUTTON_IMAGE} alt="reset" />
    </button>
  );
}

export default MarkerResetButton;
