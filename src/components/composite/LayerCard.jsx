import React from "react";
import { LayerToggle } from '../core/LayerToggle';
import { LayerButtonReel } from './LayerButtonReel';
import './layerCard.css'

export const LayerCard = ({layerName, isActive, onChange, buttons}) => (
    <div className="layerCard">
        <div className="layerCardWrapper">
            <LayerToggle layerName={layerName} isActive={isActive} onChange={onChange} />
            <LayerButtonReel buttons={buttons}/>
        </div>
        <hr></hr>
    </div>
)