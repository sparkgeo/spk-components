import React, { useCallback, useEffect, useState, useRef } from "react";
import "./RangeSlider.css";
import PropTypes from "prop-types";

export const RangeSlider = ({ label, bounds, initialValues }) => {
    const [lowerValue, setLowerValue] = useState(initialValues.lower);
    const [upperValue, setUpperValue] = useState(initialValues.upper);
    const sliderBarRef = useRef(null);
    const [pxLeft, setPxLeft] = useState(0);
    const [pxRight, setPxRight] = useState(0);
    const [mouseDownValue, setMouseDownValue] = useState(0);
    const [mouseDownHandle, setMouseDownHandle] = useState(-1);

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

    function handleHandlebarMouseUp(event) {
        event.preventDefault();
        setMouseDownHandle(-1);
    }

    const handleHandleDrag = useCallback(
        (event) => {
            if (mouseDownHandle === -1 || event.buttons === 0) {
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

            if (mouseDownHandle === 0) {
                setLowerValue(lowerValue + delta);
            } else if (mouseDownHandle === 1) {
                setUpperValue(upperValue + delta);
            } else if (mouseDownHandle === 2) {
                setLowerValue(lowerValue + delta);
                setUpperValue(upperValue + delta);
            } else {
                // eslint-disable-next-line
                console.error(`Unexpected handle ${mouseDownHandle}`);
            }
        },
        [
            mouseDownValue,
            mouseDownHandle,
            lowerValue,
            upperValue,
            bounds,
            pixelsToValue,
        ],
    );

    useEffect(() => {
        if (mouseDownHandle >= 0) {
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
    }, [mouseDownHandle, handleHandleDrag]);

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
                    onMouseDown={handleHandlebarMouseDown(2)}
                    style={{
                        left: `${pxLeft}px`,
                        width: `${pxRight - pxLeft}px`,
                    }}
                />
                <div
                    className="range-slider-handle-left"
                    role="button"
                    tabIndex="0"
                    aria-label={`${label} lower handle`}
                    onMouseDown={handleHandlebarMouseDown(0)}
                    style={{ left: `${pxLeft}px` }}
                />
                <div
                    className="range-slider-handle-right"
                    role="button"
                    tabIndex="0"
                    aria-label={`${label} upper handle`}
                    onMouseDown={handleHandlebarMouseDown(1)}
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
        lower: PropTypes.number.isRequired,
        upper: PropTypes.number.isRequired,
    }),
};
