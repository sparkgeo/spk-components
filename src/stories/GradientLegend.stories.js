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
    },
};

export const BasicGradientLegend = {
    args: {
        startColor: "red",
        endColor: "yellow",
    },
};

export const TitleBelowGradientLegend = {
    args: {
        title: "Title Below",
        startColor: "red",
        endColor: "yellow",
        titleBelow: true,
    },
};

export const GradientLegendWithNumbersBetween = {
    args: {
        title: "With Numbers",
        startColor: "red",
        endColor: "yellow",
        bins: 4,
    },
};
