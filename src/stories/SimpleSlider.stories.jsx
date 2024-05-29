// import React from "react";
import { fn } from "@storybook/test";
import { SimpleSlider } from "../components/core/SimpleSlider";

export default {
    title: "Core/SimpleSlider",
    component: SimpleSlider,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
    args: {
        min: 0.0,
        max: 100.0,
        step: 0.1,
        onChange: fn(),
    },
};

export const Empty = {
    args: {
        value: 0.0,
    },
};

export const Full = {
    args: {
        value: 100.0,
    },
};
