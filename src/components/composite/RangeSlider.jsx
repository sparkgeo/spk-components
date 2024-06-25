import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./RangeSlider.css";
import PropTypes from "prop-types";

export const RangeSlider = ({ label, bounds, initialValues }) => {
    const Handles = useMemo(() => ({
        NONE: Symbol("none"),
        LEFT: Symbol("left"),
        RIGHT: Symbol("right"),
        BAR: Symbol("bar")
    }), []);

    const [lowerValue, setLowerValue] = useState(initialValues.lower);
    const [upperValue, setUpperValue] = useState(initialValues.upper);
    const sliderBarRef = useRef(null);
    const [pxLeft, setPxLeft] = useState(0);
    const [pxRight, setPxRight] = useState(0);
    const [mouseDownValue, setMouseDownValue] = useState(0);
    const [mouseDownHandle, setMouseDownHandle] = useState(Handles.NONE);

    function valueToPixelsImpl(value) {
        const v = (value - bounds.min) / (bounds.max - bounds.min);
        return sliderBarRef.current.clientWidth * v;
    }

    function pixelsToValueImpl(position) {
        const v = position / sliderBarRef.current.clientWidth;
        return bounds.min + (bounds.max - bounds.min) * v;
    }

    const valueToPixels = useCallback(valueToPixelsImpl, [valueToPixelsImpl]);
    const pixelsToValue = useCallback(pixelsToValueImpl, [pixelsToValueImpl]);

    useEffect(() => {
        setLowerValue(Math.max(bounds.min, lowerValue));
        setUpperValue(Math.min(bounds.max, upperValue));
        setPxLeft(valueToPixels(lowerValue));
        setPxRight(valueToPixels(upperValue));
    }, [bounds, lowerValue, upperValue, valueToPixels]);

    const handleHandlebarMouseDown = (handle) => (event) => {
        event.preventDefault();
        setMouseDownValue(pixelsToValue(event.clientX));
        setMouseDownHandle(handle);
    };

    const handleHandlebarMouseUp = useCallback((event) => {
        event.preventDefault();
        setMouseDownHandle(Handles.NONE);
    }, [Handles]);

    const handleHandleDrag = useCallback(
        (event) => {
            if (mouseDownHandle === Handles.NONE || event.buttons === 0) {
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

            if (mouseDownHandle === Handles.LEFT) {
                if (lowerValue + delta > upperValue) {
                    setUpperValue(lowerValue + delta);
                    setMouseDownHandle(Handles.RIGHT);
                } else {
                    setLowerValue(lowerValue + delta);
                }
            } else if (mouseDownHandle === Handles.RIGHT) {
                if (upperValue + delta < lowerValue) {
                    setLowerValue(upperValue + delta);
                    setMouseDownHandle(Handles.LEFT);
                } else {
                    setUpperValue(upperValue + delta);
                }
            } else if (mouseDownHandle === Handles.BAR) {
                setLowerValue(lowerValue + delta);
                setUpperValue(upperValue + delta);
            } else {
                // eslint-disable-next-line
                console.error('Unexpected handle', mouseDownHandle);
            }
        },
        [
            mouseDownValue,
            mouseDownHandle,
            lowerValue,
            upperValue,
            bounds,
            pixelsToValue,
            Handles
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
    initialValues: PropTypes.shape({
        lower: PropTypes.number.isRequired,
        upper: PropTypes.number.isRequired
    })
};
