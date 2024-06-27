import React from "react";
import PropTypes from "prop-types";

import "./Stacked.css";

export const Stacked = ({ children }) => (
    <div className="layout-stacked">{children}</div>
);

Stacked.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
