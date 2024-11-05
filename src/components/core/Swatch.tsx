import styles from "./Swatch.module.css";

interface SwatchProps {
    color: string;
    label?: string;
    value?: number;
    units?: string;
}

export const Swatch = ({ color, label = "", value, units = "" }: SwatchProps) => (
    <div className={styles.swatchContainer}>
        <div
            // data-testid isn't the best approach to selecting elements in tests
            // The preference would be to use a more semantic approach, using getByRole() or another method
            data-testid="swatch"
            className={styles.swatch}
            style={{ backgroundColor: color }}
        />
        <div data-testid="swatch-label" className={styles.swatchLabel}>
            {label}
        </div>
        <div data-testid="swatch-value" className={styles.swatchValue}>
            {value !== undefined && `${value}${units}`}
        </div>
    </div>
);
