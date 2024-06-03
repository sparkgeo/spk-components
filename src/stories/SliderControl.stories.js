// import React from "react";
import { fn } from "@storybook/test";
import { SliderControl } from "../components/composite/SliderControl";

const SLIDERS = [
    {
        min: 0.0,
        max: 255.0,
        step: 1.0,
        label: "Red",
        onChange: fn(),
    },
    {
        min: 0.0,
        max: 255.0,
        step: 1.0,
        label: "Green",
        onChange: fn(),
    },
    {
        min: 0.0,
        max: 255.0,
        step: 1.0,
        label: "Blue",
        onChange: fn(),
    },
];

export default {
    title: "Composite/SliderControl",
    component: SliderControl,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    args: {
        title: "Resolution",
        units: "cm",
        sliderConfig: [
            {
                min: 1.0,
                max: 100.0,
                step: 1.0,
                label: "",
            },
        ],
    },
};

export const Colour = {
    args: {
        title: "Colour",
        units: "",
        sliderConfig: SLIDERS,
    },
};

export const Opacity = {
    args: {
        title: "Opacity",
        units: "%",
        sliderConfig: [
            {
                min: 0.0,
                max: 100.0,
                step: 0.1,
                label: "",
            },
        ],
    },
};
