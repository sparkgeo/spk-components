import React from 'react';
import { LayerToggle } from '../core/LayerToggle';
import { LayerButtonReel } from './LayerButtonReel';
import './layerCard.css';

export function LayerCard({
  layerName, isActive, onChange, buttons,
}) {
  return (
    <div className="layerCard">
      <div className="layerCardWrapper">
        <LayerToggle layerName={layerName} isActive={isActive} onChange={onChange} />
        <LayerButtonReel buttons={buttons} />
      </div>
    </div>
  );
}
