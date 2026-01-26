import PropTypes from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Button, Tooltip, TooltipTrigger } from "react-aria-components";
import { LayerToggle } from "../core/LayerToggle";
import styles from "./LayerCard.module.css";

export const LayerCard = ({
    layerName,
    isActive,
    onChange,
    attribution,
    description,
    children,
}) => {
    const [showLayerInfo, setShowLayerInfo] = useState(false);

    const hasAttribution = attribution && Boolean(attribution.text);

    return (
        <div className={styles.layerCard}>
            <div className={styles.layerCardHeader}>
                <div className={styles.layerCardTextWrapper}>
                    <span className={styles.layerCardTitle}>{layerName}</span>
                </div>
                <TooltipTrigger delay={300}>
                    <Tooltip>Toggle layer description</Tooltip>
                    {(description || hasAttribution) && (
                        <Button
                            className={styles.layerCardInfoIcon}
                            onClick={() => setShowLayerInfo(!showLayerInfo)}
                        >
                            <FontAwesomeIcon
                                size="xs"
                                fontWeight="bold"
                                icon={faInfo}
                            />
                        </Button>
                    )}
                </TooltipTrigger>
                {onChange && (
                    <LayerToggle
                        layerName={layerName}
                        isActive={isActive}
                        onChange={onChange}
                    />
                )}
            </div>
            {showLayerInfo && (
                <div className={styles.layerCardContent}>
                    <div>Test</div>
                    {description && (
                        <span className={styles.layerCardDescription}>
                            {description}
                        </span>
                    )}
                    {hasAttribution && (
                        <div className={styles.layerCardAttributionWrapper}>
                            <span className={styles.layerCardAttribution}>
                                Source:{" "}
                                <a href={attribution.url}>{attribution.text}</a>
                            </span>
                        </div>
                    )}
                    {children && children}
                </div>
            )}
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
        text: PropTypes.string,
    }),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
