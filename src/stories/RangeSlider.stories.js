import { RangeSlider } from "../components/composite/RangeSlider";

export default {
    title: "composite/RangeSlider",
    component: RangeSlider,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
    args: {
        label: "Flux capacity",
        bounds: {
            min: 0.0,
            max: 100.0,
        },
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
