import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash, faFilter, faInfo, faFillDrip, faEllipsisVertical, faChevronRight, faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './IconButton.css';

const ICON_MAP = {
  trash: faTrash,
  filter: faFilter,
  info: faInfo,
  fill: faFillDrip,
  ellipsis: faEllipsisVertical,
  chevronRight: faChevronRight,
  chevronLeft: faChevronLeft,
};

export function IconButton({ onClick, iconName }) {
  return (
    <div className="iconButton">
      <button onClick={onClick}>
        <FontAwesomeIcon icon={ICON_MAP[iconName]} />
      </button>
    </div>
  );
}

IconButton.propTypes = {
  iconName: PropTypes.oneOf(['trash', 'filter', 'info', 'fill', 'ellipsis', 'chevronLeft', 'chevronRight']),
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  iconName: 'ellipsis',
};
