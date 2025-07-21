import PropTypes from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./LayerGroup.module.css";

export const LayerGroup = ({ groupName, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.layerGroupWrapper}>
            <button type="button" className={styles.layerGroupButton} onClick={handleClick}>
                <div className={styles.layerGroupChevron}>
                    <FontAwesomeIcon size="sm" fixedWidth icon={isOpen ? faChevronDown : faChevronRight} />
                </div>
                <span className={styles.layerGroupName}>{groupName}</span>
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
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
