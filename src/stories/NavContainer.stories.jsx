import React from "react";
import { NavContainer } from "../components/containers/NavContainer";

export default {
    title: "Containers/Nav",
    component: NavContainer,
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

export const BasicContent = {
    render: () => (
        <div style={{ height: "50px"}}>
            <NavContainer>
                Nav Container    
            </NavContainer>
        </div>
    ),
};
