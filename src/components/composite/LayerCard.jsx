import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Button, Tooltip, TooltipTrigger } from "react-aria-components";
import { LayerToggle } from "../core/LayerToggle";
import styles from "./LayerCard.module.css";

export const LayerCard = ({
    layerName,
    isActive,
    onChange,
    onShowInfo,
    children,
}) => {
    const hasChildren = children && children.length > 0;

    return (
        <div className={styles.layerCard}>
            <div className={styles.layerCardHeader}>
                <div className={styles.layerCardTextWrapper}>
                    <span className={styles.layerCardTitle}>{layerName}</span>
                </div>
                <TooltipTrigger delay={300}>
                    <Tooltip>Toggle layer description</Tooltip>
                    {(hasChildren && onShowInfo) && (
                        <Button
                            className={styles.layerCardInfoIcon}
                            onClick={onShowInfo}
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
            {hasChildren && (
                <div className={styles.layerCardContent}>
                    {children}
                </div>
            )}
        </div>
    );
};

LayerCard.propTypes = {
    layerName: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onShowInfo: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
