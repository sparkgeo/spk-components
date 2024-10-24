import React from "react";
import PropTypes from "prop-types";
import { Swatch } from "../core/Swatch";
import styles from "./SwatchLegend.module.css";

export const SwatchLegend = ({ swatches }) => (
    <div className={styles.swatchLegend}>
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
