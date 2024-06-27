import { fn } from "@storybook/test";

export const EXAMPLE_LAYERS = [
    {
        layerName: "Layer One",
        isActive: false,
        onChange: fn(),
        buttons: {
            info: fn(),
        },
    },
    {
        layerName: "Layer Two",
        isActive: false,
        onChange: fn(),
        buttons: {
            info: fn(),
            trash: fn(),
        },
    },
    {
        layerName: "Layer Three",
        isActive: false,
        onChange: fn(),
        buttons: {
            fill: fn(),
            filter: fn(),
            info: fn(),
            trash: fn(),
        },
    },
    {
        layerName: "Layer Four",
        isActive: false,
        onChange: fn(),
        buttons: {
            fill: fn(),
            filter: fn(),
            info: fn(),
            trash: fn(),
        },
    },
    {
        layerName: "Layer Five",
        isActive: false,
        onChange: fn(),
        buttons: {
            info: fn(),
            trash: fn(),
        },
    },
    {
        layerName: "Layer Six",
        isActive: false,
        onChange: fn(),
        buttons: {
            fill: fn(),
            filter: fn(),
            info: fn(),
            trash: fn(),
        },
    },
];
