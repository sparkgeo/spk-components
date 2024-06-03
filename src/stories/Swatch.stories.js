// import React from "react";
import { Swatch } from "../components/core/Swatch";

export default {
    title: "Core/Swatch",
    component: Swatch,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
};

export const BasicSwatch = {
    args: {
        color: "#FF0000",
        label: "Coral Bleaching",
    },
};

export const SwatchWithValue = {
    args: {
        color: "#00FF00",
        label: "Farmland",
        value: 27.6,
        units: "km²",
    },
};
