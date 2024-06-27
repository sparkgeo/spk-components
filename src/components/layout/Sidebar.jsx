import PropTypes from "prop-types";
import React, { useState } from "react";
import { IconButton } from "../core/IconButton";
import "./Sidebar.css";

export const Sidebar = ({ children }) => {
    const [isClosed, setIsClosed] = useState(false);

    const classNames = `sidebar ${isClosed ? "closed" : ""}`;

    const handleSidebarToggle = () => {
        setIsClosed(!isClosed);
    };

    return (
        <div className="sidebarContainer">
            <div className={classNames}>{children}</div>
            <div className="sidebarToggle">
                <IconButton
                    onClick={handleSidebarToggle}
                    iconName={isClosed ? "chevronRight" : "chevronLeft"}
                />
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
