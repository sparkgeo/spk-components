import React from "react";
import PropTypes from "prop-types";
import "./NavContainer.css";

export const NavContainer = ({ children }) => (
    <div className="nav-container">
        {children}
    </div>
);

NavContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
