import { fn } from "@storybook/test";
import { LayerCard } from "../components/composite/LayerCard";

export default {
    title: "Composite/Layer Card",
    component: LayerCard,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
    },
};

export const Default = {
    args: {
        layerName: "Example Layer",
        description: "This is an example layercard that can optionally contain a descriptive text string for the layer",
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

export const WithAttribution = {
    args: {
        layerName: "Example Layer",
        description: "This is an example layercard that can optionally contain a descriptive text string for the layer",
        attribution: { text: "This is attribution text" },
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
