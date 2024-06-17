import React from "react";
import PropTypes from "prop-types";
import "./MapContainer.css";

export const MapContainer = ({ mapContainer, children }) => (
    <div className="map-container" ref={mapContainer}>
        {children}
    </div>
);

MapContainer.propTypes = {
    mapContainer: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
    children: PropTypes.node,
};

MapContainer.defaultProps = {
    children: null,
    mapContainer: null,
};
