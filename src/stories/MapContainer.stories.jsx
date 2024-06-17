import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import { DeckGL, TileLayer, BitmapLayer } from "deck.gl";
import { MapContainer } from "../components/layout/MapContainer";

import "maplibre-gl/dist/maplibre-gl.css";

export default {
    title: "Layout/MapContainer",
    component: MapContainer,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
};

export const MaplibreExample = {
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
            <div style={{ height: "100dvh" }}>
                <MapContainer mapContainer={mapContainer} />
            </div>
        );
    },
};

export const DeckGLExample = {
    render: () => {
        const INITIAL_VIEW_STATE = {
            longitude: 0,
            latitude: 0,
            zoom: 2,
        };

        const layers = [
            new TileLayer({
                data: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
                tileSize: 256,
                minZoom: 0,
                maxZoom: 22,
                renderSubLayers: (props) => {
                    const {
                        bbox: { west, south, east, north },
                    } = props.tile;

                    return new BitmapLayer(props, {
                        data: null,
                        image: props.data,
                        bounds: [west, south, east, north],
                    });
                },
            }),
        ];

        return (
            <div style={{ height: "100dvh" }}>
                <MapContainer>
                    <DeckGL
                        initialViewState={INITIAL_VIEW_STATE}
                        layers={layers}
                        controller
                    />
                </MapContainer>
            </div>
        );
    },
};
