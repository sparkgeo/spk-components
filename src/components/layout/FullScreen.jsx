import React from "react";
import PropTypes from "prop-types";

import "./FullScreen.css";

export const FullScreen = ({ hasFooter = false, children }) => (
    <div
        className={hasFooter ? "layout-fullscreen-footer" : "layout-fullscreen"}
    >
        {children}
    </div>
);

FullScreen.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    hasFooter: PropTypes.bool,
};
