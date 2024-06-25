import React from "react";
import { MapContainer } from "../components/containers/MapContainer";
import { Sidebar } from "../components/containers/SidebarContainer";
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
    <div
        style={{
            gridArea: "nav",
            height: "100%",
            width: "100%",
            background: "#003247",
            textAlign: "center",
            color: "white",
        }}
    >
        <p>Navigation</p>
    </div>
);

export const Default = {
    render: () => (
        <Layout>
            <Navigation />
            <Sidebar />
            <MapContainer />
        </Layout>
    ),
};
