import React, { useState } from 'react';
import './sidebar.css';
import { IconButton } from '../core/IconButton';

export function SideBar({ children }) {
  const [isClosed, setIsClosed] = useState(false);

  const classNames = `sidebar ${isClosed ? 'closed' : ''}`;

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
}
