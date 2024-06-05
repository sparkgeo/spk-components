import React from "react";

import PropTypes from "prop-types";
import "./BinnedLegend.css";

export const BinnedLegend = ({
    title = "Binned Legend",
    titleBelow = false,
    displayType = "horizontal",
    bins,
}) => {
    let layout;
    switch (displayType) {
        case "horizontal":
            layout = (
                <div className="binned-numbers horizontal">
                    {bins.map((bin) => (
                        <div key={bin.label} className="bin flex-container">
                            <span
                                className="color-box"
                                style={{ backgroundColor: bin.color }}
                            />
                            <span className="label">{bin.label}</span>
                        </div>
                    ))}
                </div>
            );
            break;
        case "vertical":
            layout = (
                <div className="binned-numbers vertical">
                    {bins.map((bin) => (
                        <div key={bin.label} className="bin flex-container">
                            <span
                                className="color-box"
                                style={{ backgroundColor: bin.color }}
                            />
                            <span className="label">{bin.label}</span>
                        </div>
                    ))}
                </div>
            );
            break;
        case "grid":
            layout = (
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
            );
            break;
        default:
            layout = <div>Invalid displayType</div>;
    }

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
    bins: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    displayType: PropTypes.oneOf(["horizontal", "vertical", "grid"]),
};
