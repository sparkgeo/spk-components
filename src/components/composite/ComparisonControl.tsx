import { ReactNode } from 'react';
import { AriaSliderProps } from 'react-aria';
import {Label, Slider, SliderThumb, SliderTrack} from 'react-aria-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import styles from './ComparisonControl.module.css';

export interface BaseComparisonControlProps
    extends AriaSliderProps {
    onChange: (value: number | number[]) => void;
    label: ReactNode | string;
    showLabel?: boolean;
    value?: number;
}

/**
 * Props for the `ComparisonControl` component.
 * 
 * @interface BaseComparisonControlProps
 * @extends {AriaSliderProps}
 * @property {ReactNode | string} label - The label for the slider.
 * @property {boolean} [showLabel] - Whether to show the label. Defaults to true.
 * @property {number} [value] - The initial value of the slider. Defaults to 50.
 * @property {(value: number | number[]) => void} onChange - Callback function called when the slider value changes.
 */

/**
 * A composite component that renders a slider control with optional label and custom thumb icon.
 * 
 * @param {BaseComparisonControlProps} props - The props for the component.
 * @returns {JSX.Element} The rendered slider control component.
 */

export const ComparisonControl = ({
    label,
    showLabel = true,
    onChange,
    value = 50
}: BaseComparisonControlProps) => 
    <div className={styles.comparisonControl}>
        <Slider maxValue={94} minValue={6} step={0.1} className={styles.slider} aria-label={!showLabel && typeof label === "string" ? label : undefined} onChange={onChange} value={value}>
            {showLabel && <Label className={styles.sliderLabel}>{label}</Label>}
            <SliderTrack className={styles.sliderTrack}>
                <SliderThumb className={styles.sliderThumb}>
                    <FontAwesomeIcon color='white' icon={faArrowsLeftRight} />
                </SliderThumb>
            </SliderTrack>
        </Slider>
    </div>