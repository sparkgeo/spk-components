import PropTypes from "prop-types";
import React from "react";
import {Switch} from 'react-aria-components';
import { LayerButtonReel } from "./LayerButtonReel";
import "./LayerCard.css";

export const LayerCard = ({ layerName, isActive, onChange, buttons }) => (
    <div className="layerCard">
        <div className="layerCardWrapper">
            <Switch
                isSelected={isActive}
                onChange={onChange}
            >
                <div className="indicator" />
                {layerName}
            </Switch>
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
