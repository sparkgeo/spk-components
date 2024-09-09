import React from "react";
import PropTypes from "prop-types";
import {ColorSwatch} from 'react-aria-components';
import "./Swatch.css";

export const Swatch = ({ color, label, value, units }) => (
    <div className="swatch-container">
        <ColorSwatch color={color}
            id={`swatch-${label}-${color}-${value}`}
            aria-label={label}
        />
        <label className="swatch-label" htmlFor={`swatch-${label}-${color}-${value}`}>{label}</label>
        <div className="swatch-value">
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
