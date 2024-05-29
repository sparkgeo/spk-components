import React from "react";
import { fn } from "@storybook/test";
import { Sidebar } from "../components/layout/Sidebar";
import { LayerCard } from "../components/composite/LayerCard";

const LAYERS = [
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

export default {
    title: "Layout/Sidebar",
    component: Sidebar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
        backgrounds: {
            default: "dark",
        },
    },
};

export const Empty = {};

export const WithLayerCards = {
    render: () => (
        <Sidebar>
            {LAYERS.map((layer) => {
                const { layerName, isActive, onChange, buttons } = layer;
                return (
                    <LayerCard
                        layerName={layerName}
                        isActive={isActive}
                        onChange={onChange}
                        buttons={buttons}
                    />
                );
            })}
        </Sidebar>
    ),
};
