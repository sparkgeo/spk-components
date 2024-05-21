import React from "react";
import "./layerButtonReel.css";
import PropTypes from "prop-types";
import { IconButton } from "../core/IconButton";

export const LayerButtonReel = ({ buttons }) => (
    <div className="layerButtonReel">
        {buttons &&
            Object.keys(buttons).map((key) => (
                <IconButton iconName={key} onClick={buttons[key]} />
            ))}
    </div>
);

LayerButtonReel.propTypes = {
    buttons: PropTypes.objectOf(PropTypes.func),
};

LayerButtonReel.defaultProps = {
    buttons: null,
};
