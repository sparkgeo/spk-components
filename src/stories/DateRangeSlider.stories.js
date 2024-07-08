import { DateRangeSlider } from "../components/composite/DateRangeSlider";

export default {
    title: "composite/DateRangeSlider",
    component: DateRangeSlider,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    args: {
        label: "Interesting dates",
        // valuesChanged: (values) => {
        //     console.log("valuesChanged: ", values);
        // }
    },
};

export const Default = {
    args: {
        label: "Interesting dates",
        bounds: {
            min: new Date(2024, 2, 13),
            max: new Date(2024, 5, 10),
        }
    },
};
