import { useMemo, useState, JSX } from "react";
import { Button } from "react-aria-components";

import type { PressEvent } from "react-aria";
import styles from "./CatalogCard.module.css";
import { truncateText } from "../../utils";

export type TemporalExtent = [Date, Date?];

export type IndicatorTag = "API" | "Catalog";

export interface BaseCatalog {
    // eslint-disable-next-line react/no-unused-prop-types
    id: string;
    title: string;
    description: string;
    temporalExtent: TemporalExtent;
    indicatorTag?: IndicatorTag;
}

export interface CatalogCardProps extends BaseCatalog {
    onBrowsePress?: (e: PressEvent) => void;
    maxDescriptionLength?: number;
    renderDescription?: (description: string) => JSX.Element;
}

const MAX_LENGTH = 250;

const Tag = ({ indicatorTag }: { indicatorTag: IndicatorTag }) => (
    <div
        className={`${styles.tag} ${
            indicatorTag === "API" ? styles.tagAPI : styles.tagCatalog
        }`}
    >
        {indicatorTag}
    </div>
);

export const CatalogCard = ({
    title,
    description: initialDescription,
    temporalExtent,
    indicatorTag,
    maxDescriptionLength = MAX_LENGTH,
    onBrowsePress,
    renderDescription,
}: CatalogCardProps) => {
    const [shouldTruncateDescription, setShouldTruncateDescription] =
        useState(true);

    const description = useMemo(
        () =>
            shouldTruncateDescription
                ? truncateText(initialDescription, maxDescriptionLength)
                : initialDescription,
        [initialDescription, maxDescriptionLength, shouldTruncateDescription],
    );

    const dateRange = useMemo(() => {
        const startDate = temporalExtent[0].toString();

        let endDate: string = "";

        // Check if end date exists and compare with start date
        if (
            temporalExtent[1] &&
            temporalExtent[1].getTime() > temporalExtent[0].getTime()
        ) {
            endDate = temporalExtent[1].toString();
        }

        return `${startDate}${endDate ? ` - ${endDate}` : ""}`;
    }, [temporalExtent]);

    const renderDefaultDescription = () => (
        <p className={styles.description}>
            {description}{" "}
            {initialDescription.length > maxDescriptionLength && (
                <Button
                    className={styles.button}
                    onPress={() =>
                        setShouldTruncateDescription(!shouldTruncateDescription)
                    }
                    aria-expanded={!shouldTruncateDescription}
                    aria-label="Read more"
                >
                    {shouldTruncateDescription ? "Read More" : "Read Less"}
                </Button>
            )}
        </p>
    );

    return (
        <div className={styles.cardContainer}>
            <div className={styles.infoContainer}>
                <h3 className={styles.title}>{title}</h3>
                {renderDescription
                    ? renderDescription(initialDescription)
                    : renderDefaultDescription()}
                <p className={styles.date}>{dateRange}</p>
            </div>
            <div className={styles.footerContainer}>
                <div>{indicatorTag && <Tag indicatorTag={indicatorTag} />}</div>
                <div>
                    <Button onPress={onBrowsePress} className={styles.button}>
                        Browse
                    </Button>
                </div>
            </div>
        </div>
    );
};
