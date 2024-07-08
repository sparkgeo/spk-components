import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
import { RangeSlider } from "../core/RangeSlider";
import "./DateRangeSlider.css";

export const DateRangeSlider = ({ label, bounds, valuesChanging, valuesChanged }) => {
    const timelineRef = useRef(null);
    const [sliderBounds, setSliderBounds] = useState({ min: bounds.min.getTime() / 1000.0, max: bounds.max.getTime() / 1000.0 });
    const foo = useRef(null);

    const cbValuesChanged = useCallback((values)=> {
        if (valuesChanged) {
            valuesChanged({lower: new Date(values.lower * 1000.0), upper: new Date(values.upper * 1000.0)});
        }
    }, [valuesChanged]);

    const cbValuesChanging = useCallback((values)=> {
        if (valuesChanging) {
            valuesChanging({lower: new Date(values.lower * 1000.0), upper: new Date(values.upper * 1000.0)});
        }
    }, [valuesChanging]);

    useEffect(() => {
        const timeScale = d3
            .scaleTime([foo.current.clientLeft, foo.current.clientWidth])
            .domain([bounds.min, bounds.max])
            .nice();

        setSliderBounds({ min: bounds.min.getTime() / 1000.0, max: bounds.max.getTime() / 1000.0 });
        const axisGenerator = d3.axisBottom(timeScale);
        const svgElement = d3.select(timelineRef.current);
        svgElement.select("g")
            .call(axisGenerator);
    }, [bounds]);

    return (
        <div ref={foo} className="date-range-slider">
            <div className="ui-label">{label}</div>
            <RangeSlider label={label} bounds={sliderBounds} valuesChanged={cbValuesChanged} valuesChanging={cbValuesChanging} />
            <svg ref={timelineRef} className="daterange-slider-timeline">
                <g className="timeline-axis"/>
            </svg>
        </div>
    );
};

DateRangeSlider.propTypes = {
    label: PropTypes.string.isRequired,
    bounds: PropTypes.shape({
        min: PropTypes.instanceOf(Date).isRequired,
        max: PropTypes.instanceOf(Date).isRequired
    }),
    valuesChanging: PropTypes.func,
    valuesChanged: PropTypes.func,
};
