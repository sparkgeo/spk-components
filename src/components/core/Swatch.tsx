import React from "react";
import styles from "./Swatch.module.css";

interface SwatchProps {
    color: string;
    label?: string;
    value?: number;
    units?: string;
}

export const Swatch: React.FC<SwatchProps> = ({
    color,
    label = "",
    value,
    units = "",
}) => (
    <div className={styles.swatchContainer}>
        <div className={styles.swatch} style={{ backgroundColor: color }} />
        <div className={styles.swatchLabel}>{label}</div>
        <div className={styles.swatchValue}>
            {value}
            {units}
        </div>
    </div>
);
