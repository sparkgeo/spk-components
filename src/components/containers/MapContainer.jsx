import React from "react";
import PropTypes from "prop-types";
import "./MapContainer.css";

export const MapContainer = ({ mapContainer, id, children }) => (
    <div className="map-container" id={id} ref={mapContainer}>
        {children}
    </div>
);

MapContainer.propTypes = {
    mapContainer: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
    children: PropTypes.node,
    id: PropTypes.string,
};

MapContainer.defaultProps = {
    children: null,
    mapContainer: null,
    id: null,
};
