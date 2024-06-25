import React, { useCallback, useEffect } from "react";
import "./RangeSlider.css";
import PropTypes from "prop-types";
import * as propTypes from "prop-types";

export const RangeSlider = ({ label, bounds, initialValues }) => {
    const [lowerValue, setLowerValue] = React.useState(initialValues.lower);
    const [upperValue, setUpperValue] = React.useState(initialValues.upper);
    const sliderBarRef = React.useRef(null);
    const leftHandleRef = React.useRef(null);
    const rightHandleRef = React.useRef(null);
    const [pxLeft, setPxLeft] = React.useState(0);
    const [pxRight, setPxRight] = React.useState(0);
    const [mouseDownValue, setMouseDownValue] = React.useState(0);

    function valueToPixelsImpl(value) {
        const v = (value - bounds.min) / (bounds.max - bounds.min);
        return sliderBarRef.current.clientWidth * v;
    }

    const valueToPixels = useCallback(valueToPixelsImpl, [valueToPixelsImpl]);

    function pixelsToValue(position) {
        const v = position / sliderBarRef.current.clientWidth;
        return bounds.min + (bounds.max - bounds.min) * v;
    }

    useEffect(() => {
        setLowerValue(Math.max(bounds.min, lowerValue));
        setUpperValue(Math.min(bounds.max, upperValue));
        setPxLeft(valueToPixels(lowerValue));
        setPxRight(valueToPixels(upperValue));
    }, [bounds, lowerValue, upperValue, valueToPixels]);

    function handleHandlebarMouseDown(event) {
        event.preventDefault();
        setMouseDownValue(pixelsToValue(event.clientX));
    }

    function handleHandlebarMouseUp(event) {
        event.preventDefault();
    }

    const handleHandleDrag = (handle) => (event) => {
        if (event.buttons === 0) {
            return;
        }

        event.preventDefault();

        let delta = pixelsToValue(event.movementX);

        if (lowerValue + delta < bounds.min) {
            delta = bounds.min - lowerValue;
        } else if (upperValue + delta > bounds.max) {
            delta = bounds.max - upperValue;
        }

        setMouseDownValue(mouseDownValue + delta);

        if (handle === leftHandleRef || handle === null) {
            setLowerValue(lowerValue + delta);
        }

        if (handle === rightHandleRef || handle === null) {
            setUpperValue(upperValue + delta);
        }
    };

    return (
        <div className="range-slider">
            <div className="range-slider-container">
                <div className="range-slider-bar" ref={sliderBarRef} />
                <div
                    className="range-slider-handle-bar"
                    role="slider"
                    tabIndex="0"
                    aria-label={label}
                    aria-valuenow={(lowerValue + upperValue) / 2.0}
                    aria-valuetext="from {values.lower} to {values.upper}"
                    aria-valuemin={bounds.min}
                    aria-valuemax={bounds.max}
                    onMouseDown={handleHandlebarMouseDown}
                    onMouseUp={handleHandlebarMouseUp}
                    onMouseLeave={handleHandlebarMouseUp}
                    onMouseMove={handleHandleDrag(null)}
                    style={{
                        left: `${pxLeft}px`,
                        width: `${pxRight - pxLeft}px`,
                    }}
                />
                <div
                    className="range-slider-handle-left"
                    ref={leftHandleRef}
                    role="button"
                    tabIndex="0"
                    aria-label={`${label} lower handle`}
                    onMouseDown={handleHandlebarMouseDown}
                    onMouseUp={handleHandlebarMouseUp}
                    onMouseLeave={handleHandlebarMouseUp}
                    onMouseMove={handleHandleDrag(leftHandleRef)}
                    style={{ left: `${pxLeft}px` }}
                />
                <div
                    className="range-slider-handle-right"
                    ref={rightHandleRef}
                    role="button"
                    tabIndex="0"
                    aria-label={`${label} upper handle`}
                    onMouseDown={handleHandlebarMouseDown}
                    onMouseUp={handleHandlebarMouseUp}
                    onMouseLeave={handleHandlebarMouseUp}
                    onMouseMove={handleHandleDrag(rightHandleRef)}
                    style={{ left: `${pxRight}px` }}
                />
            </div>
        </div>
    );
};

RangeSlider.propTypes = {
    label: PropTypes.string.isRequired,
    bounds: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
    }),
    initialValues: PropTypes.shape({
        lower: propTypes.number.isRequired,
        upper: propTypes.number.isRequired,
    }),
};
