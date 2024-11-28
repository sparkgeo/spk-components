import {Label, Slider, SliderThumb, SliderTrack} from 'react-aria-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import styles from './ComparisonControl.module.css';

export type ComparisonControlProps = {
    onChange: (value: number | null) => void;
    label: string;
    showLabel?: boolean;
    value?: number;
};

export const ComparisonControl = ({
    label,
    showLabel = true,
    onChange,
    value = 50
}: ComparisonControlProps) => (
    <div className={styles.comparisonControl}>
        <Slider maxValue={94} minValue={6} step={0.1} className={styles.slider} aria-label={showLabel ? undefined : label} onChange={onChange} value={value}>
            {showLabel && <Label className={styles.sliderLabel}>{label}</Label>}
            <SliderTrack className={styles.sliderTrack}>
                <SliderThumb className={styles.sliderThumb}>
                    <FontAwesomeIcon color='white' icon={faArrowsLeftRight} />
                </SliderThumb>
            </SliderTrack>
        </Slider>
    </div>
)