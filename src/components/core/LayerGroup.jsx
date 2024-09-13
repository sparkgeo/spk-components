import PropTypes from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./LayerGroup.css";

export const LayerGroup = ({ groupName, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="layer-group">
            <button type="button" className="layer-group-wrapper" onClick={handleClick}>
                <div className="layer-group-chevron">
                    <FontAwesomeIcon size="md" fixedWidth icon={isOpen ? faChevronDown : faChevronRight} />
                </div>
                <span className="layer-group-name">{groupName}</span>
            </button>
            {isOpen && 
                <div className="layer-group-children">
                    {children}
                </div>
            }

        </div>
    )
}

LayerGroup.propTypes = {
    groupName: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
