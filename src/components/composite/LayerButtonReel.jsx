import PropTypes from "prop-types";
import React from "react";
import { IconButton } from "../core/IconButton";
import styles from "./LayerButtonReel.module.css";

export const LayerButtonReel = ({ buttons }) => (
    <div className={styles.layerButtonReel}>
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
