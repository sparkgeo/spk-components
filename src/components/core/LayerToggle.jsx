import PropTypes from "prop-types";
import React from "react";
import { Switch } from "react-aria-components";
import styles from "./LayerToggle.module.css";

export const LayerToggle = ({ layerName, isActive = false, onChange, ...props }) => (
    <Switch {...props} className={styles.switch} isSelected={isActive} onChange={onChange} aria-label={layerName} value={layerName}>
        <div className={styles.indicator}/>
    </Switch>
);

LayerToggle.propTypes = {
    layerName: PropTypes.string,
    isActive: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};
