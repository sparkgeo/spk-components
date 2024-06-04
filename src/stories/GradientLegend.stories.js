// import React from "react";
import { GradientLegend } from "../components/core/GradientLegend";

export default {
    title: "Core/GradientLegend",
    component: GradientLegend,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    args: {
        startColor: "red",
        endColor: "yellow",
        width: "100px",
        height: "20px",
    },
};

export const BasicGradientLegend = {
    args: {
        startColor: "red",
        endColor: "yellow",
        width: "100px",
        height: "20px",
    },
};

export const TitleBelowGradientLegend = {
    args: {
        title: "Title Below",
        startColor: "red",
        endColor: "yellow",
        width: "100px",
        height: "20px",
        titleBelow: true,
    },
};
