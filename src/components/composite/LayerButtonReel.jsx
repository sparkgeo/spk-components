import React from 'react';
import './layerButtonReel.css';
import PropTypes from 'prop-types';
import { IconButton } from '../core/IconButton';

export function LayerButtonReel({ buttons }) {
  return (
    <div className="layerButtonReel">
      {buttons && Object.keys(buttons).map((key) => (
        <IconButton iconName={key} onClick={buttons[key]} />
      ))}
    </div>
  );
}

LayerButtonReel.proptypes = {
  buttons: PropTypes.objectOf(PropTypes.func).isRequired,
};
