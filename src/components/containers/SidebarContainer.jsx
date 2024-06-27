import PropTypes from "prop-types";
import React, { useState } from "react";
import { IconButton } from "../core/IconButton";
import "./SidebarContainer.css";

export const Sidebar = ({ showToggle, children }) => {
    const [isClosed, setIsClosed] = useState(false);

    const classNames = `sidebar ${isClosed ? "closed" : ""}`;

    const handleSidebarToggle = () => {
        setIsClosed(!isClosed);
    };

    return (
        <div className="sidebarContainer">
            <div className={classNames}>{children}</div>
            {showToggle && (
                <div className="sidebarToggle">
                    <IconButton
                        onClick={handleSidebarToggle}
                        iconName={isClosed ? "chevronRight" : "chevronLeft"}
                    />
                </div>
            )}
        </div>
    );
};

Sidebar.propTypes = {
    showToggle: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
