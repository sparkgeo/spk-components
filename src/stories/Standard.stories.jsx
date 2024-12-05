import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import { MapContainer } from "../components/containers/MapContainer";
import { NavContainer } from "../components/containers/NavContainer";
import { SidebarContainer } from "../components/containers/SidebarContainer";
import { Standard as Layout } from "../components/layout/Standard";
import { LayerCard } from "../components/composite/LayerCard";
import { EXAMPLE_LAYERS } from "./constants";
import { ComparisonControl } from "../components/composite/ComparisonControl";

export default {
    title: "Layouts/Standard",
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

export const LeftAligned = {
    render: () => (
        <Layout>
            <Navigation />
            <SidebarContainer />
            <MapContainer />
        </Layout>
    ),
};

export const RightAligned = {
    render: () => (
        <Layout align="right">
            <Navigation />
            <SidebarContainer />
            <MapContainer />
        </Layout>
    ),
};

export const PopulatedExample = {
    render: () => {
        const mapContainer = useRef(null);
        const mapRef = useRef();

        useEffect(() => {
            if (mapRef.current) return;

            mapRef.current = new maplibregl.Map({
                container: mapContainer.current,
                style: "https://demotiles.maplibre.org/style.json",
                center: [0, 0],
                zoom: 1,
            });
        }, []);

        return (
            <Layout>
                <Navigation />
                <SidebarContainer>
                    {EXAMPLE_LAYERS.map((layer) => {
                        const { layerName, isActive, onChange, buttons } =
                            layer;
                        return (
                            <LayerCard
                                layerName={layerName}
                                isActive={isActive}
                                onChange={onChange}
                                buttons={buttons}
                            />
                        );
                    })}
                </SidebarContainer>
                <MapContainer mapContainer={mapContainer}>
                    <ComparisonControl label="Clipping Slider" showLabel={false}/>
                </MapContainer>
            </Layout>
        );
    },
};
