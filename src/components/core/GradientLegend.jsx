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
    titleBelow = false,
    bins = 0,
    precision = 2,
}) => {
    const binsArray = Array(bins - 1)
        .fill(0)
        .map((_, i) => {
            const value = (
                startNo +
                ((endNo - startNo) / bins) * (i + 1)
            ).toPrecision(precision);
            return <span key={value}>{value}</span>;
        });

    return (
        <div className="gradient-box">
            {!titleBelow && <div className="ui-title"> {title}</div>}
            <div className="gradient-legend">
                <div
                    className="gradient"
                    style={{
                        background: `linear-gradient(to right, ${startColor} , ${endColor})`,
                    }}
                />
                <div className="gradient-numbers">
                    <span>{startNo}</span>
                    {binsArray}
                    <span>{endNo}</span>
                </div>
                {titleBelow && <div className="ui-title"> {title}</div>}
            </div>
        </div>
    );
};

GradientLegend.propTypes = {
    title: PropTypes.string,
    startColor: PropTypes.string,
    endColor: PropTypes.string,
    startNo: PropTypes.number,
    endNo: PropTypes.number,
    titleBelow: PropTypes.bool,
    bins: PropTypes.number,
    precision: PropTypes.number,
};