import PropTypes from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { LayerToggle } from "../core/LayerToggle";
import styles from "./LayerCard.module.css";

export const LayerCard = ({ layerName, isActive, onChange, attribution, description, children }) => {
    const [showLayerInfo, setShowLayerInfo] = useState(false);

    return (
        <div className={styles.layerCard}>
            <div className={styles.layerCardHeader}>
                <div className={styles.layerCardTextWrapper}>
                    <span className={styles.layerCardTitle}>{layerName}</span>
                </div>
                <FontAwesomeIcon className={styles.layerCardInfoIcon} onClick={() => setShowLayerInfo(!showLayerInfo)} icon={faInfoCircle} />
                { onChange &&
                    <LayerToggle
                        layerName={layerName}
                        isActive={isActive}
                        onChange={onChange}
                    />
                }

            </div>
            <div className={styles.layerCardContent}>
                {description && showLayerInfo && (<span className={styles.layerCardDescription}>{description}</span>)}
                {attribution && isActive && (
                    <div className={styles.layerCardAttributionWrapper}>
                        <span className={styles.layerCardAttribution}>
                            Source: <a href={attribution.url}>{attribution.text}</a>
                        </span>
                    </div>
                )}
                {children && (children)}
            </div>
        </div>
    );
};

LayerCard.propTypes = {
    layerName: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    description: PropTypes.string,
    attribution: PropTypes.objectOf({
        url: PropTypes.string,
        text: PropTypes.string
    }),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ])
};