import React from "react";
import PropTypes from "prop-types";
import styles from "./SimpleSlider.module.css";


export const SimpleSlider = ({
    units,
    label,
    onChange,
    min,
    max,
    step,
    value,
}) => (
    <div className={styles.simpleSlider}>
        <div>
            {label && <div className="ui-label">{label}</div>}
            <input
                onChange={onChange}
                className={styles.simpleSliderInput}
                type="range"
                value={value}
                min={min}
                max={max}
                step={step}
            />
        </div>
        <div className={styles.simpleSliderMinMaxContainer}>
            <div className="ui-label">
                {min}
                {units}
            </div>
            <div className="ui-label">
                {max}
                {units}
            </div>
        </div>
    </div>
);

SimpleSlider.propTypes = {
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    value: PropTypes.number,
    label: PropTypes.string,
    units: PropTypes.string,
};

SimpleSlider.defaultProps = {
    value: 0.0,
    units: "",
    label: "",
};
