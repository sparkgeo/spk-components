import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./RangeSlider.css";
import PropTypes from "prop-types";

export const RangeSlider = ({ label, bounds, valuesChanging, valuesChanged }) => {
    const Handles = useMemo(() => ({
        NONE: Symbol("none"),
        LEFT: Symbol("left"),
        RIGHT: Symbol("right"),
        BAR: Symbol("bar")
    }), []);

    const [values, setValues] = useState({lower: bounds.min, upper: bounds.max});
    const sliderTrackRef = useRef(null);
    const [pxLeft, setPxLeft] = useState(0);
    const [pxRight, setPxRight] = useState(0);
    const [mouseDownHandle, setMouseDownHandle] = useState(Handles.NONE);

    const valueToPixels = useCallback((value) => {
        const v = (value - bounds.min) / (bounds.max - bounds.min);
        return sliderTrackRef.current.clientWidth * v;
    }, [bounds]);

    const pixelsToValue = useCallback((position) => {
        const v = position / sliderTrackRef.current.clientWidth;
        return bounds.min + (bounds.max - bounds.min) * v;
    }, [bounds]);

    useEffect(() => {
        setPxLeft(valueToPixels(values.lower));
        setPxRight(valueToPixels(values.upper));
    }, [valueToPixels, values]);

    useEffect(() => {
        valuesChanging(values);
    }, [values, valuesChanging]);

    const handleHandlebarMouseDown = (handle) => (event) => {
        event.preventDefault();
        setMouseDownHandle(handle);
    };

    const handleHandlebarMouseUp = useCallback((event) => {
        event.preventDefault();
        setMouseDownHandle(Handles.NONE);
        valuesChanged(values);
    }, [Handles, values, valuesChanged]);

    const handleHandleDrag = useCallback(
        (event) => {
            if (mouseDownHandle === Handles.NONE || event.buttons === 0) {
                return;
            }

            event.preventDefault();

            let delta = pixelsToValue(event.movementX);

            if (mouseDownHandle === Handles.LEFT) {
                if (values.lower + delta < bounds.min) {
                    delta = bounds.min - values.lower;
                }

                if (values.lower + delta > values.upper) {
                    setMouseDownHandle(Handles.RIGHT);
                    setValues({lower: values.lower, upper: values.lower + delta});
                } else {
                    setValues({lower: values.lower + delta, upper: values.upper});
                }
            } else if (mouseDownHandle === Handles.RIGHT) {
                if (values.upper + delta > bounds.max) {
                    delta = bounds.max - values.upper;
                }

                if (values.upper + delta < values.lower) {
                    setMouseDownHandle(Handles.LEFT);
                    setValues({lower: values.upper + delta, upper: values.upper});
                } else {
                    setValues({lower: values.lower, upper: values.upper + delta});
                }
            } else if (mouseDownHandle === Handles.BAR) {
                if (values.lower + delta < bounds.min) {
                    delta = bounds.min - values.lower;
                } else if (values.upper + delta > bounds.max) {
                    delta = bounds.max - values.upper;
                }

                setValues({lower: values.lower + delta, upper: values.upper + delta});
            } else {
                // eslint-disable-next-line
                console.error('Unexpected handle', mouseDownHandle);
            }
        },
        [
            mouseDownHandle,
            bounds,
            pixelsToValue,
            Handles,
            values
        ]
    );

    useEffect(() => {
        if (mouseDownHandle !== Handles.NONE) {
            window.addEventListener("mousemove", handleHandleDrag);
            window.addEventListener("mouseup", handleHandlebarMouseUp);
        } else {
            window.removeEventListener("mousemove", handleHandleDrag);
            window.removeEventListener("mouseup", handleHandlebarMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", handleHandleDrag);
            window.removeEventListener("mouseup", handleHandlebarMouseUp);
        };
    }, [mouseDownHandle, handleHandleDrag, handleHandlebarMouseUp, Handles]);

    const handleTrackClick = (event) => {
        event.preventDefault();

        const value = pixelsToValue(event.nativeEvent.offsetX);

        if (value < values.lower) {
            setValues({lower: value, upper: values.upper});
        } else if (value > values.upper) {
            setValues({lower: values.lower, upper: value});
        }
    };

    return (
        <div className="range-slider">
            <div className="range-slider-container">
                <div
                    className="range-slider-track"
                    ref={sliderTrackRef}
                    role="none"
                    tabIndex="-1"
                    onClick={handleTrackClick}
                />
                <div
                    className="range-slider-handle-bar"
                    role="slider"
                    tabIndex="0"
                    aria-label={label}
                    aria-valuenow={(values.lower + values.upper) / 2.0}
                    aria-valuetext="from {values.lower} to {values.upper}"
                    aria-valuemin={bounds.min}
                    aria-valuemax={bounds.max}
                    onMouseDown={handleHandlebarMouseDown(Handles.BAR)}
                    style={{
                        left: `${pxLeft}px`,
                        width: `${pxRight - pxLeft}px`
                    }}
                />
                <div
                    className="range-slider-handle-left"
                    role="button"
                    tabIndex="0"
                    aria-label={`${label} lower handle`}
                    onMouseDown={handleHandlebarMouseDown(Handles.LEFT)}
                    style={{ left: `${pxLeft}px` }}
                />
                <div
                    className="range-slider-handle-right"
                    role="button"
                    tabIndex="0"
                    aria-label={`${label} upper handle`}
                    onMouseDown={handleHandlebarMouseDown(Handles.RIGHT)}
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
        max: PropTypes.number.isRequired
    }),
    valuesChanging: PropTypes.func,
    valuesChanged: PropTypes.func,
};

RangeSlider.defaultProps = {
    valuesChanging: () => {},
    valuesChanged: () => {},
};
