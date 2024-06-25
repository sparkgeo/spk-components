import React from "react";
import { Sidebar } from "../components/containers/SidebarContainer";
import { LayerCard } from "../components/composite/LayerCard";
import { EXAMPLE_LAYERS } from "./constants";

export default {
    title: "Containers/Sidebar",
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

export const Empty = {
    render: () => (
        <div style={{ width: "25vw", height: "100vh" }}>
            <Sidebar />
        </div>
    ),
};

export const WithLayerCards = {
    render: () => (
        <div style={{ width: "25vw", height: "100vh" }}>
            <Sidebar>
                {EXAMPLE_LAYERS.map((layer) => {
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
        </div>
    ),
};
