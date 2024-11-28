import React from "react";
import PropTypes from "prop-types";
import styles from "./MapContainer.module.css";

export const MapContainer = ({ mapContainer, id, children }) => (
    <div className={styles.mapWrapper}>
        <div className={styles.mapContainer} id={id} ref={mapContainer}/>
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