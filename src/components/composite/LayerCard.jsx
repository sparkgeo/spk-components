import PropTypes from "prop-types";
import React from "react";
import { LayerToggle } from "../core/LayerToggle";
import { LayerButtonReel } from "./LayerButtonReel";
import "./LayerCard.css";

export const LayerCard = ({ layerName, isActive, onChange, buttons, children }) => (
    <div className="layerCard">
        <div className="layerCardWrapper">
            <LayerToggle
                layerName={layerName}
                isActive={isActive}
                onChange={onChange}
            />
            <LayerButtonReel buttons={buttons} />
        </div>
        {isActive && (
            <div className="layerCardChildren">
                {children}
            </div>
        )}
    </div>
);

LayerCard.propTypes = {
    layerName: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    buttons: PropTypes.objectOf(PropTypes.func),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ])
};