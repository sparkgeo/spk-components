import React from "react"
import PropTypes from 'prop-types';
import './layerToggle.css'

export const LayerToggle = ({layerName, isActive, onChange}) => (
    <div className="layerToggle">
        <p>{layerName}</p>
        <div className="switch">
            <input type="checkbox" value={layerName} checked={isActive} onChange={onChange}></input>
            <span className="slider"></span>
        </div>
    </div>
)

LayerToggle.propTypes = {
    layerName: PropTypes.string,
    isActive: PropTypes.bool,
    onChange: PropTypes.func,
};
  
LayerToggle.defaultProps = {
    layerName: 'Example Layer',
    isActive: false
};