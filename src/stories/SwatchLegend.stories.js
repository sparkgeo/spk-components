import { SwatchLegend } from "../components/composite/SwatchLegend";

export default {
    title: "Composite/Swatch Legend",
    component: SwatchLegend,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
};

export const Basic = {
    args: {
        swatches: [
            {
                color: "#FF0000",
                label: "Coral Bleaching",
            },
            {
                color: "#00FF00",
                label: "Farmland",
                value: 27.6,
                units: "km²",
            },
        ],
    },
};
