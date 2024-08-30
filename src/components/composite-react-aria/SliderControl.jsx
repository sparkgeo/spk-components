import React from "react";
import PropTypes from "prop-types";
import { Label, Slider, SliderOutput, SliderThumb, SliderTrack } from 'react-aria-components';
import "./SliderControl.css";

export const SliderControl = ({ title, units, sliderConfig }) => (
    <div>
        <h3 className="ui-label">{title}</h3>
        {sliderConfig &&
             sliderConfig.map((slider) => {
                 const { label, min, max, step, value, onChange } = slider;

                 return <Slider
                     minValue={min}
                     maxValue={max}
                     step={step}  
                     value={value}  
                     onChange={onChange}
                 >
                     <Label>{label}</Label>
                     <SliderOutput>
                         {({ state }) => <>{state.getThumbValueLabel(0)}{units}</>}
                     </SliderOutput>
                     <SliderTrack>
                         <SliderThumb name={label}/>
                     </SliderTrack>
                 </Slider>
             })}
    </div>
);

SliderControl.propTypes = {
    title: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired,
    sliderConfig: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
        .isRequired,
};
