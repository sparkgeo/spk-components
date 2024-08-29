import React from "react";
import { MapContainer } from "../components/containers/MapContainer";
import { NavContainer } from "../components/containers/NavContainer";
import { SidebarContainer } from "../components/containers/SidebarContainer";
import { Stacked as Layout } from "../components/layout/Stacked";

export default {
    title: "Layouts/Stacked",
    component: Layout,
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

const Navigation = () => (
    <NavContainer>
        <h2>Example</h2>
    </NavContainer>
);

export const Default = {
    render: () => (
        <Layout>
            <Navigation />
            <SidebarContainer />
            <MapContainer />
        </Layout>
    ),
};
