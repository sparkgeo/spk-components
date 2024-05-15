import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFilter, faInfo, faFillDrip, faEllipsisVertical  } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import './LayerIconButton.css'

const ICON_MAP = {
    trash: faTrash,
    filter: faFilter,
    info: faInfo,
    fill: faFillDrip,
    ellipsis: faEllipsisVertical
};

export const LayerIconButton = ({onClick, iconName}) => (
    <div className="layerIconButton">
        <button onClick={onClick}>
            <FontAwesomeIcon icon={ICON_MAP[iconName]}></FontAwesomeIcon>
        </button>
    </div>
)

LayerIconButton.propTypes = {
    iconName: PropTypes.oneOf(['trash', 'filter', 'info', 'fill', 'ellipsis']),
    onClick: PropTypes.func,
};
  
LayerIconButton.defaultProps = {
    iconName: 'ellipsis'
};