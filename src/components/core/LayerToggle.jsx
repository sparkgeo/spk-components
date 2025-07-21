import PropTypes from "prop-types";
import React from "react";
import styles from "./LayerToggle.module.css";

export const LayerToggle = ({ layerName, isActive = false, onChange }) => (
    <div className={styles.layerToggle}>
        <div className={styles.switch}>
            <input
                type="checkbox"
                value={layerName}
                checked={isActive}
                onChange={onChange}
            />
            <span className={styles.slider} />
        </div>
    </div>
);

LayerToggle.propTypes = {
    layerName: PropTypes.string,
    isActive: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};
