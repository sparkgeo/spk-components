import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faFilter,
    faInfo,
    faFillDrip,
    faEllipsisVertical,
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./IconButton.css";

const ICON_MAP = {
    trash: faTrash,
    filter: faFilter,
    info: faInfo,
    fill: faFillDrip,
    ellipsis: faEllipsisVertical,
    chevronRight: faChevronRight,
    chevronLeft: faChevronLeft,
};

export const Icon = ({ iconName }) => (
    <FontAwesomeIcon icon={ICON_MAP[iconName]} />
);

Icon.propTypes = {
    iconName: PropTypes.oneOf([
        "trash",
        "filter",
        "info",
        "fill",
        "ellipsis",
        "chevronLeft",
        "chevronRight",
    ]),
};

Icon.defaultProps = {
    iconName: "ellipsis",
};
