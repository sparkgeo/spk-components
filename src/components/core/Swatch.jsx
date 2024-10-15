import React from "react";
import PropTypes from "prop-types";
import styles from "./Swatch.module.css";

export const Swatch = ({ color, label, value, units }) => (
    <div className={styles.swatchContainer}>
        <div className={styles.swatch} style={{ "background-color": color }} />
        <div className={styles.swatchLabel}>{label}</div>
        <div className={styles.swatchValue}>
            {value}
            {units}
        </div>
    </div>
);

Swatch.propTypes = {
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number,
    units: PropTypes.string,
};

Swatch.defaultProps = {
    value: undefined,
    units: "",
};
