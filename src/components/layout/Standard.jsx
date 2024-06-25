import React from "react";
import PropTypes from "prop-types";

import "./Standard.css";

export const Standard = ({ align = "left", children }) => (
    <div className={`layout-standard ${align}`}>{children}</div>
);

Standard.propTypes = {
    align: PropTypes.oneOf(["left", "right"]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
