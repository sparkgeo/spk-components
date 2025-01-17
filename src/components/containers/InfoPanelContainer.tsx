import { ReactElement } from "react";
import styles from "./InfoPanelContainer.module.css";

type InfoPanelProps = {
    children: ReactElement,
    position: string
}

export const InfoPanelContainer = ({children, position='centerRight'}:InfoPanelProps) => (
    <div className={`${styles.infoPanelContainer} ${styles[position]}`}>
        <div>{children}</div>
    </div>
);
