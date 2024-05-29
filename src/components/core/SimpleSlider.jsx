import React from "react";
import "./SimpleSlider.css";
import PropTypes from "prop-types";

export const SimpleSlider = ({
    units,
    label,
    onChange,
    min,
    max,
    step,
    value,
}) => (
    <div className="simple-slider">
        <div className="ui-label">{label}</div>
        <input
            onChange={onChange}
            className="simple-slider-input"
            type="range"
            value={value}
            min={min}
            max={max}
            step={step}
        />

        <div className="simple-slider-min-max-container">
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
