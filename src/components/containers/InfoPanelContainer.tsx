import { ReactElement } from "react";
import styles from "./InfoPanelContainer.module.css";

type Position = 'topLeft' | 'topRight' | 'centerLeft' | 'centerRight' | 'bottomLeft' | 'bottomRight';
type InfoPanelProps = {
    children: ReactElement,
    position: Position
}

export const InfoPanelContainer = ({children, position='centerRight'}:InfoPanelProps) => (
    <div className={`${styles.infoPanelContainer} ${styles[position]}`}>
        {children}
    </div>
);
