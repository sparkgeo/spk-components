// Gradient.js
import React from "react";

import PropTypes from "prop-types";
import "./GradientLegend.css";

export const GradientLegend = ({
    startColor,
    endColor,
    startNo,
    endNo,
    width,
    height,
}) => (
    <div
        className="gradient-legend"
        style={{ width: `${width}`, height: `${height}` }}
    >
        <div
            className="gradient"
            style={{
                background: `linear-gradient(to right, ${startColor} , ${endColor})`,
            }}
        />
        <div className="gradient-numbers">
            <span>{startNo}</span>
            <span>{endNo}</span>
        </div>
    </div>
);

GradientLegend.defaultProps = {
    startColor: "red",
    endColor: "yellow",
    startNo: "0",
    endNo: "100",
    width: "100px",
    height: "20px",
};

GradientLegend.propTypes = {
    startColor: PropTypes.string,
    endColor: PropTypes.string,
    startNo: PropTypes.number,
    endNo: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
};
