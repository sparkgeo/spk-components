import { GradientLegend } from "../components/core/GradientLegend";

export default {
    title: "Core/GradientLegend",
    component: GradientLegend,
    tags: ["autodocs"],
    parameters: {
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

export const GradientLegendWithNumbersBetween = {
    args: {
        title: "With Numbers",
        startColor: "red",
        endColor: "yellow",
        width: "400px",
        height: "20px",
        noInBetween: 4,
    },
};
