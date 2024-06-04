// Gradient.js
import React from "react";

import PropTypes from "prop-types";
import "./GradientLegend.css";

export const GradientLegend = ({
    title = "Gradient Legend",
    startColor = "red",
    endColor = "yellow",
    startNo = 0,
    endNo = 100,
    width = "100px",
    height = "20px",
    titleBelow = false,
    noInBetween = 0,
    precision = 2,
}) => (
    <div className="gradient-box">
        {!titleBelow && <h4> {title}</h4>}
        <div className="gradient-legend" style={{ width, height }}>
            <div
                className="gradient"
                style={{
                    background: `linear-gradient(to right, ${startColor} , ${endColor})`,
                }}
            />
            <div className="gradient-numbers">
                <span>{startNo}</span>
                {Array.from({ length: noInBetween }, (_, i) => (
                    <span key={i}>
                        {(
                            ((endNo - startNo) / (noInBetween + 1)) *
                            (i + 1)
                        ).toPrecision(precision)}
                    </span>
                ))}
                <span>{endNo}</span>
            </div>
            {titleBelow && <h4>{title}</h4>}
        </div>
    </div>
);

GradientLegend.propTypes = {
    title: PropTypes.string,
    startColor: PropTypes.string,
    endColor: PropTypes.string,
    startNo: PropTypes.number,
    endNo: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
    titleBelow: PropTypes.bool,
    noInBetween: PropTypes.number,
    precision: PropTypes.number,
};
