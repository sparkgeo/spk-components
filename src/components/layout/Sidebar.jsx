import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';
import { IconButton } from '../core/IconButton';

export const Sidebar = ({ children }) => {
    const [isClosed, setIsClosed] = useState(false);

    const classNames = `sidebar ${isClosed ? 'closed' : ''}`;

    console.log('Hello World!');

    const handleSidebarToggle = () => {
        setIsClosed(!isClosed);
    };

    return (
        <div className="sidebarContainer">
            <div className={classNames}>
                {children}
            </div>
            <div className="sidebarToggle">
                <IconButton onClick={handleSidebarToggle} iconName={isClosed ? 'chevronRight' : 'chevronLeft'} />
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
