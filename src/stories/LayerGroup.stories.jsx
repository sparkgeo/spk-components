import React from "react";
import { LayerGroup } from "../components/core/LayerGroup";

export default {
    title: "Core/Layer Group",
    component: LayerGroup,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
};

export const Default = {
    render: () => (
        <LayerGroup groupName="Example Group">
            <p>Child 1</p>
            <p>Child 2</p>
            <p>Child 3</p>
        </LayerGroup>
    ),
};
