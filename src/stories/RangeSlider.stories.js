import { RangeSlider } from "../components/core/RangeSlider";

export default {
    title: "core/RangeSlider",
    component: RangeSlider,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    args: {
        label: "Flux capacity",
        bounds: {
            min: 0.0,
            max: 100.0,
        },
        step: 0.0,
        // valuesChanging: (values) => {
        //     console.log("valuesChanging: ", values);
        // },
        // valuesChanged: (values) => {
        //     console.log("valuesChanged: ", values);
        // }
    },
};

export const Default = {
    args: {
        label: "Flux capacity",
        bounds: {
            min: 0.0,
            max: 100.0,
        },
    },
};

export const Controlled = {
    args: {
        label: "Used flux capacity",
        bounds: {
            min: 0.0,
            max: 100.0,
        },
        currentValues: {
            lower: 25.0,
            upper: 90.0
        }
    },
};

export const WithValues = {
    args: {
        label: "Used flux capacity",
        bounds: {
            min: 0.0,
            max: 100.0,
        },
        currentValues: {
            lower: 10.0,
            upper: 80.0
        },
        showValues: true
    },
};