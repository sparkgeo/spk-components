import React from "react";
import "./SimpleSlider.css";
import PropTypes from "prop-types";

export const SimpleSlider = ({ onChange, min, max, step, value }) => (
    <div className="simple-slider">
        <input
            onChange={onChange}
            className="simple-slider-input"
            type="range"
            value={value}
            min={min}
            max={max}
            step={step}
        />
    </div>
);

SimpleSlider.propTypes = {
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    value: PropTypes.number,
};

SimpleSlider.defaultProps = {
    value: 0.0,
};
