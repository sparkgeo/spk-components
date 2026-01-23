import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import { MapContainer } from "../components/containers/MapContainer";
import { NavContainer } from "../components/containers/NavContainer";
import { FullScreen as Layout } from "../components/layout/FullScreen";
import { ComparisonControl } from "../components/composite/ComparisonControl";

export default {
    title: "Layouts/FullScreen",
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

export const FullScreen = {
    render: () => (
        <Layout>
            <Navigation />
            <MapContainer />
        </Layout>
    ),
};

export const WithFooter = {
    render: () => (
        <Layout hasFooter>
            <Navigation />
            <MapContainer />
            <div className="footer">This is footer</div>
        </Layout>
    )
}

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
            <Layout hasFooter>
                <Navigation />
                <MapContainer mapContainer={mapContainer}>
                    <ComparisonControl label="Clipping Slider" showLabel={false}/>
                </MapContainer>
                <div className="footer">This is footer</div>
            </Layout>
        );
    },
};
