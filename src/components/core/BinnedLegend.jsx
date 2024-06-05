import React from "react";

import PropTypes from "prop-types";
import "./BinnedLegend.css";

const Bin = ({ color, label }) => (
    <div key={label} className="bin flex-container">
        <span className="color-box" style={{ backgroundColor: color }} />
        <span className="label">{label}</span>
    </div>
);

Bin.propTypes = {
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

const layouts = {
    horizontal: (bins) => (
        <div className="binned-numbers horizontal">
            {bins.map((bin) => (
                <Bin color={bin.color} label={bin.label} />
            ))}
        </div>
    ),
    vertical: (bins) => (
        <div className="binned-numbers vertical">
            {bins.map((bin) => (
                <Bin color={bin.color} label={bin.label} />
            ))}
        </div>
    ),
    grid: (bins) => (
        <div className="binned-legend">
            <div className="color-row">
                {bins.map((bin) => (
                    <div key={bin.label} className="grid-item">
                        <span
                            className="grid-color-box"
                            style={{ backgroundColor: bin.color }}
                        />
                        <span className="label">{bin.label}</span>
                    </div>
                ))}
            </div>
        </div>
    ),
};

export const BinnedLegend = ({
    title = "Binned Legend",
    titleBelow = false,
    displayType = "horizontal",
    bins,
}) => {
    const layout = layouts[displayType]
        ? layouts[displayType](bins)
        : (() => {
              throw new Error(`Invalid displayType: ${displayType}`);
          })();

    return (
        <div className="binned-box">
            {!titleBelow && <div className="ui-title"> {title}</div>}
            {layout}
            {titleBelow && <div className="ui-title"> {title}</div>}
        </div>
    );
};

BinnedLegend.propTypes = {
    title: PropTypes.string,
    titleBelow: PropTypes.bool,
    bins: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ).isRequired,
    displayType: PropTypes.oneOf(["horizontal", "vertical", "grid"]),
};
