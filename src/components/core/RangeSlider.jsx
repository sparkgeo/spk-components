/* eslint-disable no-restricted-globals */
import React, { useCallback, useEffect, useRef, useState, useReducer } from "react";
import PropTypes from "prop-types";
import styles from "./RangeSlider.module.css";


function valueReducer(values, action) {
    switch (action.type) {
    case "ChangeStep": {
        let v = {lower: Math.max(action.bounds.min, values.lower), upper: Math.min(action.bounds.max, values.upper)};

        if (action.step > 0.0) {
            v = {
                lower: Math.max(action.bounds.min, Math.floor(values.lower / action.step) * action.step),
                upper: Math.min(action.bounds.max, Math.ceil(values.upper / action.step) * action.step)
            };
        }

        if (action.callback) {
            action.callback(v);
        }
        return v;
    }
    case "ChangeValues": {
        let v = {
            lower: Math.max(action.bounds.min, action.values[0]),
            upper: Math.min(action.bounds.max, action.values[1])
        };

        if (action.step > 0.0) {
            v = {
                lower: Math.max(action.bounds.min, Math.floor(action.values[0] / action.step) * action.step),
                upper: Math.min(action.bounds.max, Math.ceil(action.values[1] / action.step) * action.step)
            };
        }

        if (action.callback) {
            action.callback(v);
        }

        return v;
    }

    default:
        throw Error(`Unknown action:  ${action.type}`);
    }
}

export const RangeSlider = ({ label, bounds, step = 0.0, valuesChanging, valuesChanged, currentValues = {}, showValues}) => {
    const lowerDefault = Math.max(isNaN(currentValues.lower) ? -Infinity :  currentValues.lower, bounds.min);
    const upperDefault = Math.min(isNaN(currentValues.upper) ? Infinity :  currentValues.upper, bounds.max)

    // noinspection JSCheckFunctionSignatures
    const [values, dispatch] = useReducer(valueReducer, {lower: lowerDefault, upper: upperDefault});
    const sliderTrackRef = useRef(null);
    const [pxLeft, setPxLeft] = useState(0);
    const [pxRight, setPxRight] = useState(0);
    const [mouseDownHandle, setMouseDownHandle] = useState("none");
    const [cumulativeDelta, setCumulativeDelta] = useState(0.0);

    const valueToPixels = useCallback((value) => {
        const v = (value - bounds.min) / (bounds.max - bounds.min);
        return sliderTrackRef.current.clientWidth * v;
    }, [bounds]);

    const pixelsToValue = useCallback((position) => {
        const v = position / sliderTrackRef.current.clientWidth;
        return bounds.min + (bounds.max - bounds.min) * v;
    }, [bounds]);

    const deltaPixelsToValue = useCallback((position) => {
        const v = position / sliderTrackRef.current.clientWidth;
        return (bounds.max - bounds.min) * v;
    }, [bounds]);

    useEffect(() => {
        setPxLeft(valueToPixels(values.lower));
        setPxRight(valueToPixels(values.upper));
    }, [valueToPixels, values]);

    useEffect(() => {
        if (valuesChanging) {
            valuesChanging(values);
        }
    }, [values, valuesChanging]);

    useEffect(() => {
        // noinspection JSCheckFunctionSignatures
        dispatch({
            type: 'ChangeStep',
            callback: valuesChanged,
            step,
            bounds
        });
    }, [step, valuesChanged, bounds]);

    const handleHandlebarMouseDown = (event) => {
        event.preventDefault();
        setMouseDownHandle(event.target.getAttribute("data-handle-id"));
        setCumulativeDelta(0.0);
    };

    const handleHandlebarMouseUp = useCallback((event) => {
        event.preventDefault();
        setMouseDownHandle("none");
        if (valuesChanged) {
            valuesChanged(values);
        }
    }, [values, valuesChanged]);

    const handleHandleDrag = useCallback(
        (event) => {
            if (mouseDownHandle === "none" || event.buttons === 0) {
                return;
            }

            event.preventDefault();

            let delta = deltaPixelsToValue(event.movementX);

            if (step !== 0.0) {
                let cumDelta = cumulativeDelta + delta;

                setCumulativeDelta(cumDelta);

                if (Math.abs(cumDelta) < Math.abs(step)) {
                    return;
                }

                if (cumDelta > 0.0) {
                    cumDelta -= Math.abs(step);
                    delta = Math.abs(step);
                } else {
                    cumDelta += Math.abs(step);
                    delta = -Math.abs(step);
                }

                setCumulativeDelta(cumDelta);
            }

            let v = [values.lower, values.upper];

            if (mouseDownHandle === "left") {
                if (values.lower + delta < bounds.min) {
                    delta = bounds.min - values.lower;
                }

                if (values.lower + delta > values.upper) {
                    setMouseDownHandle("right");
                    v = [values.lower, values.lower + delta];
                } else {
                    v = [values.lower + delta, values.upper];
                }
            } else if (mouseDownHandle === "right") {
                if (values.upper + delta > bounds.max) {
                    delta = bounds.max - values.upper;
                }

                if (values.upper + delta < values.lower) {
                    setMouseDownHandle("left");
                    v = [values.upper + delta, values.upper];
                } else {
                    v = [values.lower, values.upper + delta];
                }
            } else if (mouseDownHandle === "bar") {
                if (values.lower + delta < bounds.min) {
                    delta = bounds.min - values.lower;
                } else if (values.upper + delta > bounds.max) {
                    delta = bounds.max - values.upper;
                }

                v = [values.lower + delta, values.upper + delta];
            } else {
                throw Error(`Unknown handle: ${mouseDownHandle}`);
            }

            // noinspection JSCheckFunctionSignatures
            dispatch({type: "ChangeValues", values: v, bounds, step});
        },
        [
            mouseDownHandle,
            bounds,
            deltaPixelsToValue,
            values,
            cumulativeDelta,
            step
        ]
    );

    useEffect(() => {
        if (mouseDownHandle !== "none") {
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
    }, [mouseDownHandle, handleHandleDrag, handleHandlebarMouseUp]);

    const handleTrackClick = (event) => {
        event.preventDefault();

        const value = pixelsToValue(event.nativeEvent.offsetX);

        if (value < values.lower) {
            // noinspection JSCheckFunctionSignatures
            dispatch({type: "ChangeValues", values: [value, values.upper], bounds, step, callback: valuesChanged});
        } else if (value > values.upper) {
            // noinspection JSCheckFunctionSignatures
            dispatch({type: "ChangeValues", values: [values.lower, value], bounds, step, callback: valuesChanged});
        }
    };

    return (
        <div className={styles.rangeSlider}>
            <div className={styles.rangeSliderLabel}>{label}</div>
            <div className={styles.rangeSliderContainer}>
                <div
                    className={styles.rangeSliderTrack}
                    ref={sliderTrackRef}
                    role="none"
                    tabIndex="-1"
                    onClick={handleTrackClick}
                />
                <div
                    className={styles.rangeSliderHandleBar}
                    role="slider"
                    tabIndex="0"
                    aria-label={label}
                    aria-valuenow={(values.lower + values.upper) / 2.0}
                    aria-valuetext="from {values.lower} to {values.upper}"
                    aria-valuemin={bounds.min}
                    aria-valuemax={bounds.max}
                    data-handle-id="bar"
                    onMouseDown={handleHandlebarMouseDown}
                    style={{
                        left: `${pxLeft}px`,
                        width: `${pxRight - pxLeft}px`
                    }}
                />
                <div
                    className={styles.rangeSliderHandleLeft}
                    role="button"
                    tabIndex="0"
                    aria-label={`${label} lower handle`}
                    data-handle-id="left"
                    onMouseDown={handleHandlebarMouseDown}
                    style={{ left: `${pxLeft}px` }}
                >
                    {showValues && <span className={styles.rangeSliderValue} >{Math.round(values.lower)}</span> }
                </div>
                <div
                    className={styles.rangeSliderHandleRight}
                    role="button"
                    tabIndex="0"
                    aria-label={`${label} upper handle`}
                    data-handle-id="right"
                    onMouseDown={handleHandlebarMouseDown}
                    style={{ left: `${pxRight}px` }}
                >
                    {showValues && <span className={styles.rangeSliderValue}>{Math.round(values.upper)}</span> }
                </div>
            </div>
            <div className={styles.rangeSliderValues}>
                <span className={styles.rangeSliderMin}>{bounds.min}</span>
                <span className={styles.rangeSliderMax}>{bounds.max}</span>
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
    step: PropTypes.number,
    valuesChanging: PropTypes.func,
    valuesChanged: PropTypes.func,
    currentValues: PropTypes.shape({
        lower: PropTypes.number,
        upper: PropTypes.number
    }),
    showValues: PropTypes.bool
};
