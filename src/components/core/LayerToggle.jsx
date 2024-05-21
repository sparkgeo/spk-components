import React from "react";
import PropTypes from "prop-types";
import "./layerToggle.css";

export const LayerToggle = ({ layerName, isActive, onChange }) => (
    <div className="layerToggle">
        <p>{layerName}</p>
        <div className="switch">
            <input
                type="checkbox"
                value={layerName}
                checked={isActive}
                onChange={onChange}
            />
            <span className="slider" />
        </div>
    </div>
);

LayerToggle.propTypes = {
    layerName: PropTypes.string,
    isActive: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

LayerToggle.defaultProps = {
    layerName: "Example Layer",
    isActive: false,
};
