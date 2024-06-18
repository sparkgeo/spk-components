import PropTypes from "prop-types";
import React from "react";
import { IconButton } from "../core/IconButton";
import "./LayerButtonReel.css";

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
