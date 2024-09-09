import React from "react";
import PropTypes from "prop-types";
import { Swatch } from "../core-react-aria/Swatch";
import "./SwatchLegend.css";

export const SwatchLegend = ({ swatches }) => (
    <div className="swatch-legend">
        {swatches &&
            swatches.map((swatch) => {
                const { color, label, value, units } = swatch;

                return (
                    <Swatch
                        key={label}
                        label={label}
                        color={color}
                        value={value}
                        units={units}
                    />
                );
            })}
    </div>
);

SwatchLegend.propTypes = {
    swatches: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
        .isRequired,
};
