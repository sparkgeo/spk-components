import React, { useCallback, useEffect, useMemo, useRef, useState, useReducer } from "react";
import "./RangeSlider.css";
import PropTypes from "prop-types";


function valueReducer(values, action) {
    switch (action.type) {
    case "ChangeStep": {
        let v = {lower: values.lower, upper: values.upper};

        if (action.step > 0.0) {
            v = {
                lower: Math.max(action.bounds.min, Math.floor(values.lower / action.step) * action.step),
                upper: Math.min(action.bounds.max, Math.ceil(values.upper / action.step) * action.step)
            };
        }

        action.callback(v);
        return v;
    }
    case "ChangeValues":
        return {lower: Math.max(action.bounds.min, action.values[0]), upper: Math.min(action.bounds.max, action.values[1])};

    default:
        throw Error(`Unknown action:  ${action.type}`);
    }
}

export const RangeSlider = ({ label, bounds, step, valuesChanging, valuesChanged }) => {
    const Handles = useMemo(() => ({
        NONE: Symbol("none"),
        LEFT: Symbol("left"),
        RIGHT: Symbol("right"),
        BAR: Symbol("bar")
    }), []);

    // noinspection JSCheckFunctionSignatures
    const [values, dispatch] = useReducer(valueReducer, {lower: bounds.min, upper: bounds.max});
    const sliderTrackRef = useRef(null);
    const [pxLeft, setPxLeft] = useState(0);
    const [pxRight, setPxRight] = useState(0);
    const [mouseDownHandle, setMouseDownHandle] = useState(Handles.NONE);
    const [cumulativeDelta, setCumulativeDelta] = useState(0.0);

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

    useEffect(() => {
        // noinspection JSCheckFunctionSignatures
        dispatch({
            type: 'ChangeStep',
            callback: valuesChanged,
            step,
            bounds
        });
    }, [step, valuesChanged, bounds]);

    const handleHandlebarMouseDown = (handle) => (event) => {
        event.preventDefault();
        setMouseDownHandle(handle);
        setCumulativeDelta(0.0);
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

            if (mouseDownHandle === Handles.LEFT) {
                if (values.lower + delta < bounds.min) {
                    delta = bounds.min - values.lower;
                }

                if (values.lower + delta > values.upper) {
                    setMouseDownHandle(Handles.RIGHT);
                    v = [values.lower, values.lower + delta];
                } else {
                    v = [values.lower + delta, values.upper];
                }
            } else if (mouseDownHandle === Handles.RIGHT) {
                if (values.upper + delta > bounds.max) {
                    delta = bounds.max - values.upper;
                }

                if (values.upper + delta < values.lower) {
                    setMouseDownHandle(Handles.LEFT);
                    v = [values.upper + delta, values.upper];
                } else {
                    v = [values.lower, values.upper + delta];
                }
            } else if (mouseDownHandle === Handles.BAR) {
                if (values.lower + delta < bounds.min) {
                    delta = bounds.min - values.lower;
                } else if (values.upper + delta > bounds.max) {
                    delta = bounds.max - values.upper;
                }

                v = [values.lower + delta, values.upper + delta];
            } else {
                throw Error(`Unknown handle:  mouseDownHandle`);
            }

            // noinspection JSCheckFunctionSignatures
            dispatch({type: "ChangeValues", values: v, bounds});
        },
        [
            mouseDownHandle,
            bounds,
            pixelsToValue,
            Handles,
            values,
            cumulativeDelta,
            step
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
            // noinspection JSCheckFunctionSignatures
            dispatch({type: "ChangeValues", values: [value, values.upper], bounds});
        } else if (value > values.upper) {
            // noinspection JSCheckFunctionSignatures
            dispatch({type: "ChangeValues", values: [values.lower, value], bounds});
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
    step: PropTypes.number,
    valuesChanging: PropTypes.func,
    valuesChanged: PropTypes.func,
};

RangeSlider.defaultProps = {
    step: 0.0,
    valuesChanging: () => {},
    valuesChanged: () => {},
};
