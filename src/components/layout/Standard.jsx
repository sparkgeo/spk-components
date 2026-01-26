import React from "react";
import PropTypes from "prop-types";

import "./Standard.css";

export const Standard = ({ align = "left", hasFooter = false, children }) => (
    <div className={`layout-standard ${align}${hasFooter ? ' footer' : ''}`}>{children}</div>
);

Standard.propTypes = {
    align: PropTypes.oneOf(["left", "right"]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    hasFooter: PropTypes.bool
};
