import React from "react";
import PropTypes from "prop-types";
import "./Swatch.css";

export const Swatch = ({ color, label, value, units }) => (
    <div className="swatch-container">
        <div className="swatch" style={{ "background-color": color }} />
        <div className="swatch-label">{label}</div>
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
