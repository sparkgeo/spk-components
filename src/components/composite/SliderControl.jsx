import React from "react";
import PropTypes from "prop-types";
import { SimpleSlider } from "../core/SimpleSlider";
import "./SliderControl.css";

export const SliderControl = ({ title, units, sliderConfig }) => (
    <div className=" slider-control-wrapper">
        <div className="ui-label">{title}</div>
        <div />

        {sliderConfig &&
            sliderConfig.map((slider) => {
                const { label } = slider;
                return <div className="slider-label">{label}</div>;
            })}

        {sliderConfig &&
            sliderConfig.map((slider) => {
                const { onChange, min, max, step, value } = slider;
                return (
                    <SimpleSlider
                        onChange={onChange}
                        units={units}
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                    />
                );
            })}
    </div>
);

SliderControl.propTypes = {
    title: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired,
    sliderConfig: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
        .isRequired,
};
