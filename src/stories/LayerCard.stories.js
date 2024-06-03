import { fn } from "@storybook/test";
import { LayerCard } from "../components/composite/LayerCard";

export default {
    title: "Composite/Layer Card",
    component: LayerCard,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
};

export const Default = {
    args: {
        layerName: "Example Layer",
        isActive: true,
        onChange: fn(),
        buttons: {
            fill: fn(),
            filter: fn(),
            info: fn(),
            trash: fn(),
        },
    },
};
