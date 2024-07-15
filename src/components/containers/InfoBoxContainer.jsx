import React from "react";
import PropTypes from "prop-types";
import "./InfoBoxContainer.css";

export const InfoBox = ({ children }) => (
    <div className="infoBoxContainer">
        <div>{children}</div>
    </div>
);

InfoBox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
