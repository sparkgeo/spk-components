// Gradient.js
import React from "react";

import PropTypes from "prop-types";
import styles from "./GradientLegend.module.css";

export const GradientLegend = ({
    title,
    startColor = "red",
    endColor = "yellow",
    startNo,
    endNo,
    titleBelow = false,
    bins = 0,
    precision = 2,
    units
}) => {
    const binsArray =
        bins > 0
            ? Array(bins - 1)
                .fill(0)
                .map((_, i) => {
                    const value = (
                        startNo +
                        ((endNo - startNo) / bins) * (i + 1)
                    ).toPrecision(precision);
                    return <span key={value}>{value}</span>;
                })
            : [];

    return (
        <div className="gradient-box">
            {!titleBelow && <div className="ui-title"> {title}</div>}
            <div className={styles.gradientLegend}>
                <div
                    className={styles.gradient}
                    style={{
                        background: `linear-gradient(to right, ${startColor} , ${endColor})`,
                    }}
                />
                <div className={styles.gradientNumbers}>
                    <span>{startNo} {units}</span>
                    {binsArray}
                    <span>{endNo} {units}</span>
                </div>
                {titleBelow && <div className={styles.uiTitle}> {title}</div>}
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
    units: PropTypes.string,
};
