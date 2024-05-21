import React from "react";
import PropTypes from "prop-types";
import { LayerToggle } from "../core/LayerToggle";
import { LayerButtonReel } from "./LayerButtonReel";
import "./layerCard.css";

export const LayerCard = ({ layerName, isActive, onChange, buttons }) => (
    <div className="layerCard">
        <div className="layerCardWrapper">
            <LayerToggle
                layerName={layerName}
                isActive={isActive}
                onChange={onChange}
            />
            <LayerButtonReel buttons={buttons} />
        </div>
    </div>
);

LayerCard.propTypes = {
    layerName: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    buttons: PropTypes.objectOf(PropTypes.func),
};

LayerCard.defaultProps = {
    isActive: false,
    buttons: null,
};
