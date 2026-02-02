import PropTypes from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./LayerGroup.module.css";

export const LayerGroup = ({ groupName, className, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.layerGroupWrapper + (className ? ` ${className}` : "")}>
            <button type="button" className={styles.layerGroupButton} onClick={handleClick}>

                <span className={styles.layerGroupName}>{groupName}</span>
                <div className={styles.layerGroupChevron}>
                    <FontAwesomeIcon size="sm" fixedWidth icon={isOpen ? faChevronDown : faChevronRight} />
                </div>
            </button>
            {isOpen && 
                <div className={styles.layerGroupChildren}>
                    {children}
                </div>
            }
        </div>
    )
}

LayerGroup.propTypes = {
    groupName: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
