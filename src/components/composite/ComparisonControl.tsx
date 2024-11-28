import {Label, Slider, SliderThumb, SliderTrack} from 'react-aria-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import styles from './ComparisonControl.module.css';

interface ComparisonControlProps {
    onChange: (value: number | null) => void;
    label: string;
    showLabel: boolean;
};

export const ComparisonControl = ({
    label,
    showLabel = true,
    onChange
}: ComparisonControlProps) => (
    <div className={styles.comparisonControl}>
        <Slider className={styles.slider} aria-label={showLabel ? undefined : label} onChange={onChange} defaultValue={50}>
            {showLabel && <Label>{label}</Label>}
            <SliderTrack>
                <SliderThumb className={styles.sliderThumb}>
                    <FontAwesomeIcon color='white' icon={faArrowsLeftRight} />
                </SliderThumb>
            </SliderTrack>
        </Slider>
    </div>
)