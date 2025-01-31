import { ReactNode } from 'react';
import { AriaSliderProps } from 'react-aria';
import {Label, Slider, SliderThumb, SliderTrack} from 'react-aria-components';
import styles from "./SimpleSlider.module.css";

export interface BaseSimpleSliderProps
    extends AriaSliderProps {
    onChange: (value: number | number[]) => void;
    label: ReactNode | string;
    showLabel?: boolean;
    value?: number;
}

export const SimpleSlider = ({
    label = "",
    onChange,
    minValue,
    maxValue,
    step,
    value = 0,
    showLabel,
    ...props
}: BaseSimpleSliderProps) => (

    <Slider maxValue={maxValue} minValue={minValue} step={step} className={styles.slider} aria-label={!showLabel && typeof label === "string" ? label : undefined} onChange={onChange} value={value} {...props}>
        {showLabel && <Label className={styles.sliderLabel}>{label}</Label>}
        <SliderTrack className={styles.sliderTrack}>
            <SliderThumb className={styles.sliderThumb}/>
        </SliderTrack>
    </Slider>
);
