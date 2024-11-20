import PropTypes from "prop-types";
import React from "react";
import { LayerToggle } from "../core/LayerToggle";
import { LayerButtonReel } from "./LayerButtonReel";
import styles from "./LayerCard.module.css";

export const LayerCard = ({ layerName, isActive, onChange, buttons, description, children }) => (
    <div className={styles.layerCard}>
        <div className={styles.layerCardWrapper}>
            <div className={styles.layerCardTextWrapper}>
                <span className={styles.layerCardTitle}>{layerName}</span>
                <span className={styles.layerCardDescription}>{description}</span>
            </div>
            <LayerButtonReel buttons={buttons} />
            { onChange &&
                <LayerToggle
                    layerName={layerName}
                    isActive={isActive}
                    onChange={onChange}
                />
            }
        </div>
        <div className={styles.layerCardChildren}>
            {children}
        </div>
    </div>
);

LayerCard.propTypes = {
    layerName: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    buttons: PropTypes.objectOf(PropTypes.func),
    description: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ])
};